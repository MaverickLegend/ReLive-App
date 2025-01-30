<template>
    <div class="container">
        <div class="tasks-container" v-for="(tasks, status) in groupedTasks" :key="status">
            <h2>{{status}}</h2>
            <VueDraggable class="drag-container" v-model="groupedTasks[status]" group="tasks" :id="status"
                @add="onTaskMove($event)" :animation="200" ghost-class="ghost" chosen-class="chosen"
                drag-class="dragging">
                <div class="column" v-for="(task) in tasks" :key="task.id" :data-task-id="task.id">
                    <h1>{{task.title}}</h1>
                    <p>{{task.description}}</p>
                    <h3>{{task.assigned_to}}</h3>
                    <h3>{{task.urgency}}</h3>
                </div>
            </VueDraggable>
        </div>
    </div>
</template>

<script setup lang="ts">

import { computed, onMounted, type ComputedRef} from 'vue'
import { VueDraggable, type SortableEvent } from 'vue-draggable-plus';
import { useTaskStore } from '@/stores/taskStore';
import { TasksStatus, type Task } from '@/stores/taskStore'

const tasks = useTaskStore();

onMounted(() => { 
    tasks.fetchTasks();
})

const groupedTasks: ComputedRef<Record<TasksStatus, Task[]>> = computed(() => {
    return tasks.tasks.reduce((acc, task) => {
        if (!acc[task.status]) {
            acc[task.status] = [];
        }
        acc[task.status].push(task);
        return acc;
    }, {
        [TasksStatus.Pendient]: [],
        [TasksStatus.InEjecution]: [],
        [TasksStatus.Finished]: []
    } as Record<TasksStatus, Task[]>);
});

const onTaskMove = async (event: SortableEvent) => {
    const movedTaskId = event.item.dataset.taskId;
    const newStatus = event.to.id as TasksStatus;

    if (movedTaskId && newStatus) {
        const task = tasks.tasks.find(t => t.id === movedTaskId);
        if (task) {
            const previousStatus = task.status;
            task.status = newStatus;
            tasks.updateTaskStatus(movedTaskId, newStatus).catch(() => {
                task.status = previousStatus;
            });
        }
    }
}


</script>

<style scoped lang="scss">
    .container {
        display: grid;
        padding: 2rem;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        background-color: yellow;

        .tasks-container{
            background: linear-gradient(90deg, #ff8a00, #e52e71);
            padding: 2rem;
            border-radius: 1rem;
            
            .drag-container{
                min-height: 30rem;

                .column{
                    background-color: white;
                    padding: 1rem;
                    border-radius: 1rem;
                    margin-bottom: 1rem;
                    h1{
                        font-size: 1.5rem;
                        margin: 0;
                    }
                    p{
                        font-size: 1rem;
                        margin: 0;
                    }
                    h3{
                        font-size: 1rem;
                        margin: 0;
                    }
                }

            .ghost {
                    opacity: 0.5;
                    transform: scale(0.95);
                    transition: all 0.2s ease-in-out;
                }
            
            .chosen {
                    background-color: #ffeb3b;
                    transition: background-color 0.3s ease;
                }
            
            .dragging {
                    transform: rotate(5deg);
                    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
                }
            }
        }
    }
</style>
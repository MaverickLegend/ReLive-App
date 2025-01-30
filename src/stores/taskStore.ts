import { defineStore } from "pinia";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export enum TasksStatus {
    Pendient = 'Pediente',
    InEjecution = 'En ejecución',
    Finished = 'Terminado',
}

export interface Task { 
    id: string,
    title: string,
    description: string,
    assigned_to: string,
    urgency: string,
    status: TasksStatus,
    archived: boolean,
}

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [] as Task[],
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchTasks() { 
            this.loading = true;
            try {
                const response = await axios.get(`${API_BASE_URL}/tasks`)
                this.tasks = response.data;
                
            } catch (err) {
                this.error = 'Error fetching tasks';
                console.log(err);
            } finally { 
                this.loading = false;
            }            
        },

        async updateTaskStatus(taskId: string, newStatus: TasksStatus) { 
            try {
                await axios.patch(`${API_BASE_URL}/tasks/${taskId}`, { status: newStatus })
                const task = this.tasks.find(t => t.id === taskId);
                if (task) task.status = newStatus;
            } catch (error) {
                console.log("Error updating status");
            }
        }
    }
})
<template>
  <transition name="fade-slide">
    <div v-if="isOpen" class="modal-overlay">
      <div class="modal-content">
        <header class="modal-header">
          <h2>Detalles del Artículo</h2>
          <button @click="onClose" class="close-btn">X</button>
        </header>
        <section class="modal-body">
          <ul v-if="filteredData">
            <li v-for="(value, key) in filteredData" :key="key">
              <strong>{{ translateKey(key) }}:</strong> {{ formatValue(key, value) }}
            </li>
          </ul>
          <p v-else>No hay información disponible.</p>
        </section>
        <footer class="modal-footer">
          <button @click="onClose" class="btn">Cerrar</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { fieldTranslations, valueTranslations } from "../../utils/translations"


// Props del componente
const props = defineProps<{
  isOpen: boolean; // Indica si el modal está visible
  data: Partial<Record<string, any>> | null; // Información a mostrar en el modal
  onClose: () => void; // Función para cerrar el modal
}>();

const filteredData = computed(() => {
    if (!props.data) return null;
    const excludedFields = ["id"];
    return Object.keys(props.data)
        .filter((key) => !excludedFields.includes(key))
        .reduce((result, key) => {
            if (props.data) {
                result[key] = props.data[key];
            }
            return result;
        }, {} as Record<string, any>);
});


// Función para traducir claves
const translateKey = (key: string): string => {
  return fieldTranslations[key] || key;
};

// Formatear valores específicos
const formatValue = (key: string, value: any): string => {
  if (valueTranslations[key] && valueTranslations[key][value]) {
    return valueTranslations[key][value]; // Traducción encontrada
  }
  if (typeof value === "boolean") return value ? "Sí" : "No";
  if (typeof value === "number" && key === "power") return `${value} W`;
  if (typeof value === "number" && key === "diameter") return `${value} mm`;
  console.log(formatValue("audioCategory", "microphone"))
  return value; // Retornar el valor sin traducir si no hay coincidencia
};
</script>

<style scoped lang="scss">

@import '../../styles//base/_transitions.scss';

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  
  .modal-content {
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    width: 500px;
    max-width: 90%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ddd;
      padding-bottom: 0.5rem;

      .close-btn {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
    
    .modal-body {
      margin: 1rem 0;
    }
    
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      .btn {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      
      .btn:hover {
        background-color: #0056b3;
      }
    }
  }
}  

</style>
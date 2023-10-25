<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

// export default {
//     name: 'Navigation',
//     setup() {
//         onMounted(() => {
//             console.log('Navigation mounted');
//         });
//     },
// };
//**//////////////////////////////////////////// **//
//**                Variables                    **//
//**//////////////////////////////////////////// **//
const showDropdown = ref(false);


//**//////////////////////////////////////////// **//
//**                Functions                   **//
//**//////////////////////////////////////////// **//
function toggleDropDown() {
  showDropdown.value = !showDropdown.value;
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
</script>
<template>
  <Nav class="navigation-container flex-row flex-apart">
    <div class="main-navigation-title">
      <span> Portfolio </span>
    </div>
    <ul class="flex-row">
      <li>Home</li>
      <li>About</li>
      <li>Experience</li>
      <li>Contact</li>
    </ul>
  </Nav>
  <div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
      <input @change="switchTheme" type="checkbox" id="checkbox" />
      <div class="slider round"></div>
    </label>
    <em>Enable Dark Mode!</em>
  </div>
</template>
<style scoped lang="scss">
@import "../src/styles/MainStyle.scss";
.navigation-container {
  padding: 1rem;
  background: var(--primary);
}

li {
  margin: 0 0.5rem;
}

/*Simple css to style it like a toggle switch*/
.theme-switch-wrapper {
  display: flex;
  align-items: center;

  em {
    margin-left: 10px;
    font-size: 1rem;
  }
}
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display:none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
}

input:checked + .slider {
  background-color: #66bb6a;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

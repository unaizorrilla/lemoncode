import styles from './index.module.css'

var h1 = document.createElement('h1')
h1.className = styles.title;

// instead of using console log as the exercise suggests, we will set the text content of the h1 element
h1.textContent = import.meta.env.VITE_TITLE_TEXT || 'Default Title';

document.querySelector<HTMLDivElement>('#app')!.appendChild(h1);


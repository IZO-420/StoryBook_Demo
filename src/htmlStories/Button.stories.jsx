import button from '../html/components/buttons/button.html'
import '../html/css/buttons/simpleButton.css'

export default {
    title: 'HTML Components/Buttons/Simple Button',
    component: 'button',
  };
  
  export const Primary = () => {
    const div = document.createElement('div');
    div.innerHTML = button; 
    div.getElementsByTagName("button")[0].classList.add('primary-button');
    const htmlString = div.innerHTML; // Get the HTML as a string
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    );
  };

  export const Secondary = () =>{
    const div = document.createElement('div');
    div.innerHTML = button; 
    div.getElementsByTagName("button")[0].classList.add('secondary-button');
    const htmlString = div.innerHTML; // Get the HTML as a string
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    );
  }

  export const button3D = () =>{
    const div = document.createElement('div');
    div.innerHTML = button; 
    div.getElementsByTagName("button")[0].classList.add('button-3d');
    const htmlString = div.innerHTML; // Get the HTML as a string
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    );
  }
  
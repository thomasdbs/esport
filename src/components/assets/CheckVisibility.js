export const CheckVisibility = (element, isVisible) => {

  const step = document.querySelector(`.${element}`)
  const stepAlreadyInvisible = step.classList.contains('invisible')

  if (isVisible) {
    if (stepAlreadyInvisible) {
      step.classList.remove('invisible')
    }
  }else {
    if (stepAlreadyInvisible === false) {
      step.classList.add('invisible')
    }
  }

}

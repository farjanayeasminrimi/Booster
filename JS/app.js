const faqs = document.querySelectorAll('.faq_details');

faqs.forEach(faq_details => {
  faq_details.addEventListener('click', () =>{

    faq_details.classList.toggle('open');

    const icon = faq_details.querySelector('.faq_icon i');
    if(icon.className==='fa-solid fa-plus'){
      icon.className="fa-solid fa-minus";
    }
    else{
      icon.className="fa-solid fa-plus";
    }
  })
})

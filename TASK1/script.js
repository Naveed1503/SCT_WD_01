window.addEventListener('scroll', () => 
    {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) 
        {
      navbar.classList.add('scrolled');
        } else
            {  
      navbar.classList.remove('scrolled');
            }
    });
  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  toggleButton.addEventListener('click', () => 
    {
    navLinks.classList.toggle('active');
  });

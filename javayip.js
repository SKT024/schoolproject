<script>
   const items = document.querySelectorAll('.fade-scroll, .fade-only');
 
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('visible');
         observer.unobserve(entry.target);
       }
     });
   }, {
     threshold: 0.2
   });
 
   items.forEach(item => observer.observe(item));
   </script>
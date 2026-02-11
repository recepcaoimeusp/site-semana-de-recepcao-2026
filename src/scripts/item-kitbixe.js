  document.addEventListener('DOMContentLoaded', () => {
      const itemButtons = document.querySelectorAll('.grid > div');
      
      const modal = document.getElementById('image-modal');
      const backdrop = document.getElementById('modal-backdrop');
      const imageContainer = document.getElementById('modal-image-container');
      
      let activeClone = null;
      let isAnimating = false;

      function openImage(sourceBtn) {
          if (isAnimating) return;
          isAnimating = true;

          const originalImg = sourceBtn.querySelector('img');
          
          const rect = originalImg.getBoundingClientRect();
          
          const clone = originalImg.cloneNode(true);
          
          clone.style.position = 'fixed';
          clone.style.left = `${rect.left}px`;
          clone.style.top = `${rect.top}px`;
          clone.style.width = `${rect.width}px`;
          clone.style.height = `${rect.height}px`;
          clone.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
          clone.style.zIndex = '60';
          clone.classList.remove('hover:scale-105');
          
          imageContainer.appendChild(clone);
          activeClone = clone;

          modal.classList.remove('hidden');
          
          requestAnimationFrame(() => {
              backdrop.classList.remove('opacity-0'); 

              const scaleFactor = 6; 
              const finalWidth = rect.width * scaleFactor;
              const finalHeight = rect.height * scaleFactor;

              const viewportX = window.innerWidth / 2;
              const viewportY = window.innerHeight / 2;

              clone.style.left = `${viewportX - (finalWidth / 2)}px`;
              clone.style.top = `${viewportY - (finalHeight / 2)}px`;
              clone.style.width = `${finalWidth}px`;
              clone.style.height = `${finalHeight}px`;
              clone.style.maxWidth = 'none'; 
              clone.style.maxHeight = 'none';
              
              setTimeout(() => { isAnimating = false; }, 400);
          });
      }

      function closeImage() {
          if (!activeClone || isAnimating) return;
          isAnimating = true;

          backdrop.classList.add('opacity-0');
          activeClone.style.opacity = '0';
          activeClone.style.transform = 'scale(0.8)';
          
          setTimeout(() => {
              modal.classList.add('hidden');
              if (activeClone) {
                  activeClone.remove();
                  activeClone = null;
              }
              isAnimating = false;
          }, 300);
      }

      itemButtons.forEach(btn => {
          btn.style.cursor = 'pointer';
          
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openImage(btn);
          });
      });

      backdrop.addEventListener('click', closeImage);
      window.addEventListener('scroll', () => {
          if (!modal.classList.contains('hidden')) {
              closeImage();
          }
      }, { passive: true });
  });
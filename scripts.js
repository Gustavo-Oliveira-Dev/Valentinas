// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function () {

    // Elementos do modal
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close');

    // Todos os itens da galeria
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Dados das imagens (placeholder - será substituído pelas imagens reais)
    const imageData = {
        1: {
            src: 'assets/camisola_1_M.png',
            title: 'Camisola Elegante',
            description: 'Camisola em seda com detalhes em renda, perfeita para momentos especiais. Disponível em várias cores e tamanhos.'
        },
        2: {
            src: 'images/foto2.jpg',
            title: 'Babydoll Delicado',
            description: 'Babydoll em tecido suave com acabamento delicado. Design romântico e confortável para o dia a dia.'
        },
        3: {
            src: 'images/foto3.jpg',
            title: 'Camisola Romântica',
            description: 'Camisola longa com estampa floral e detalhes bordados. Ideal para noites românticas.'
        },
        4: {
            src: 'images/foto4.jpg',
            title: 'Babydoll Sensual',
            description: 'Babydoll em tecido transparente com aplicações de renda. Design moderno e sofisticado.'
        },
        5: {
            src: 'images/foto5.jpg',
            title: 'Camisola Luxo',
            description: 'Camisola premium em cetim com bordados exclusivos. Peça única para ocasiões especiais.'
        },
        6: {
            src: 'images/foto6.jpg',
            title: 'Babydoll Charmoso',
            description: 'Babydoll com laços e detalhes em renda francesa. Charme e elegância em uma só peça.'
        },
        7: {
            src: 'images/foto7.jpg',
            title: 'Camisola Sofisticada',
            description: 'Camisola midi com corte moderno e acabamento impecável. Sofisticação para mulheres exigentes.'
        },
        8: {
            src: 'images/foto8.jpg',
            title: 'Babydoll Encantador',
            description: 'Babydoll com estampa delicada e alças ajustáveis. Conforto e beleza em harmonia perfeita.'
        },
        9: {
            src: 'images/foto9.jpg',
            title: 'Camisola Glamour',
            description: 'Camisola com brilhos sutis e corte assimétrico. Para mulheres que gostam de se destacar.'
        },
        10: {
            src: 'images/foto10.jpg',
            title: 'Babydoll Exclusivo',
            description: 'Babydoll de edição limitada com detalhes únicos. Exclusividade e estilo em uma peça especial.'
        },
        11: {
            src: 'images/foto11.jpg',
            title: 'Camisola Premium',
            description: 'Camisola da linha premium com tecidos importados. Qualidade superior e design exclusivo.'
        },
        12: {
            src: 'images/foto12.jpg',
            title: 'Babydoll Especial',
            description: 'Babydoll com aplicações de pérolas e bordados artesanais. Peça especial para momentos únicos.'
        },
        13: {
            src: 'images/foto13.jpg',
            title: 'Camisola Única',
            description: 'Camisola com design inovador e corte anatômico. Peça única que valoriza a silhueta feminina.'
        },
        14: {
            src: 'images/foto14.jpg',
            title: 'Babydoll Refinado',
            description: 'Babydoll com acabamento refinado e detalhes em ouro. Elegância e requinte em cada detalhe.'
        },
        15: {
            src: 'images/foto15.jpg',
            title: 'Camisola Divina',
            description: 'Camisola inspirada na moda francesa com toque contemporâneo. Divina em todos os aspectos.'
        },
        16: {
            src: 'images/foto16.jpg',
            title: 'Babydoll Sublime',
            description: 'Babydoll com tecido sublime e caimento perfeito. Beleza natural realçada com elegância.'
        },
        17: {
            src: 'images/foto17.jpg',
            title: 'Camisola Magnífica',
            description: 'Camisola com bordados magníficos e acabamento artesanal. Arte vestível para mulheres especiais.'
        },
        18: {
            src: 'images/foto18.jpg',
            title: 'Babydoll Deslumbrante',
            description: 'Babydoll deslumbrante com brilhos discretos e corte moderno. Para mulheres que brilham naturalmente.'
        },
        19: {
            src: 'images/foto19.jpg',
            title: 'Camisola Radiante',
            description: 'Camisola radiante com tecidos que capturam a luz. Beleza que irradia de dentro para fora.'
        },
        20: {
            src: 'images/foto20.jpg',
            title: 'Babydoll Perfeito',
            description: 'Babydoll com proporções perfeitas e acabamento impecável. A perfeição em forma de lingerie.'
        }
    };

    // Adiciona evento de clique para cada item da galeria
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            const data = imageData[index];

            if (data) {
                // Atualiza o conteúdo do modal
                modalImage.src = data.src;
                modalImage.alt = data.title;
                modalTitle.textContent = data.title;
                modalDescription.textContent = data.description;

                // Mostra o modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Previne scroll da página

                // Adiciona animação de entrada
                modal.style.animation = 'fadeIn 0.3s ease';
            }
        });
    });

    // Fecha o modal ao clicar no X
    closeBtn.addEventListener('click', function () {
        closeModal();
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fecha o modal com a tecla ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Função para fechar o modal
    function closeModal() {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaura scroll da página
        }, 300);
    }

    // Navegação suave para links do menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito parallax suave no hero
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;

        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Animação de entrada para itens da galeria
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplica animação de entrada aos itens da galeria
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Função para trocar imagens (será usada quando as imagens reais forem adicionadas)
    function updateGalleryImage(index, imagePath) {
        const item = document.querySelector(`[data-index="${index}"]`);
        if (item) {
            const placeholder = item.querySelector('.image-placeholder');
            if (placeholder) {
                // Substitui o placeholder por uma imagem real
                placeholder.innerHTML = `<img src="${imagePath}" alt="Foto ${index}" style="width: 100%; height: 100%; object-fit: cover;">`;

                // Atualiza os dados da imagem
                if (imageData[index]) {
                    imageData[index].src = imagePath;
                }
            }
        }
    }

    // Função para atualizar informações de um item
    function updateItemInfo(index, title, description) {
        const item = document.querySelector(`[data-index="${index}"]`);
        if (item) {
            const titleElement = item.querySelector('.item-title');
            const descriptionElement = item.querySelector('.item-description');

            if (titleElement) titleElement.textContent = title;
            if (descriptionElement) descriptionElement.textContent = description;

            // Atualiza os dados da imagem
            if (imageData[index]) {
                imageData[index].title = title;
                imageData[index].description = description;
            }
        }
    }

    // Torna as funções globais para facilitar edição
    window.updateGalleryImage = updateGalleryImage;
    window.updateItemInfo = updateItemInfo;

    // Adiciona animação de fade out para o modal
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    console.log('Site Valentina\'s carregado com sucesso!');
    console.log('Para adicionar imagens, use: updateGalleryImage(index, "caminho/para/imagem.jpg")');
    console.log('Para atualizar informações, use: updateItemInfo(index, "Novo Título", "Nova descrição")');
});

// Função para criar diretório de imagens e instruções
function createImageDirectory() {
    console.log('Para organizar suas imagens:');
    console.log('1. Crie uma pasta chamada "images" no mesmo diretório do site');
    console.log('2. Adicione suas 20 fotos nomeadas como: foto1.jpg, foto2.jpg, ..., foto20.jpg');
    console.log('3. As imagens serão carregadas automaticamente');
}

// Chama a função de instruções
createImageDirectory();

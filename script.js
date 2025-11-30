const personagem = document.querySelector('.category-btn')
const resultsContainer = document.getElementById('resultsContainer')

personagem.addEventListener('click', async function () {
    try {
        const resposta = await fetch('https://genshin.jmp.blue/characters/all')
        console.log(resposta)
        const dados = await resposta.json()

        dados.forEach(personagem => {
            const div = document.createElement('div');
            const resultado = `             
                <article class="item-card" data-id="fiction-001" aria-labelledby="card-title-1">
                    <h3 id="card-title-1">${personagem.name}</h3>
                    <p class="card-desc">${personagem.description}</p>
                    <div class="card-meta">
                        <span class="card-badge">Raridade: ${personagem.rarity}</span>
                    </div>

                    <p class="card-footer">ID fictício: <code>fiction-001</code></p>
                </article>`

            div.innerHTML = resultado;

            resultsContainer.appendChild(div);

                console.log(personagem)
        });

    } catch (error) {

    }
})


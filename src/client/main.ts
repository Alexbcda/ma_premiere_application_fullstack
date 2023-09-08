const app = document.querySelector('#app') as HTMLDivElement

const text = document.createElement('p')

const button = document.createElement('button')
button.innerText = "Clickez ici"
button.addEventListener('click', async () => {
  const res = await fetch(`/hello/.input.text}`);
  const message = await res.text()
  text.innerText = message
})

const input = document.createElement('input') as HTMLInputElement
input.setAttribute("type", "text")

app.appendChild(input)
app.appendChild(button)
app.appendChild(text)

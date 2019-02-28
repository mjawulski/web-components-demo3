let tmpl = document.createElement("template");
tmpl.innerHTML = `
 <style>
 .cookie-info-section {
    background: rgba(0, 0, 0, 0.1);
    text-align: left;
    font-size: 1em;
    font-family: initial;
    font-weight: normal;
}
#close-button {
  display: block;
  float: right;
  cursor: pointer;
}

.not-display {
  display: none;
}


</style>

<div class="cookie-info-section">
  <a id="close-button">Zamknij</a>
  <h4>Cookies - vanilla.js</h4>
  <p>
    Nasza strona wykorzystuje pliki cookies w celu zapamiętywania preferencji i
    ustawień oraz zbierania anonimowych danych dla celów reklamowych i
    statystycznych. Korzystając ze strony, wyrażasz zgodę na wykorzystywanie
    plików cookies. Możesz w każdym czasie określić sposób wykorzystywania
    plików cookies w ustawieniach swojej przeglądarki internetowej. Jeżeli
    pozostawisz te ustawienia bez zmian, pliki cookies zostaną zapisane w
    pamięci Twojego urządzenia. Zmiana ustawień plików cookies może ograniczyć
    funkcjonalność serwisu.
  </p>
</div>

  
`;

class CookieInfo extends HTMLElement {
  constructor() {
    super();

    let template = tmpl.content.cloneNode(true);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template);

    let closeButton = this.shadowRoot.querySelector("#close-button");

    closeButton.addEventListener("click", this.hide);
  }

  hide() {
    this.parentElement.classList.add("not-display");
  }
}

customElements.define("cookie-info", CookieInfo);

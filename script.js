const doxForm = document.getElementById('searchForm');
const searchResults = document.getElementById('searchResults');

doxForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const targetName = document.getElementById('targetName').value;
    const targetAge = document.getElementById('targetAge').value;
    const targetPhone = document.getElementById('targetPhone').value;
    const targetAddress = document.getElementById('targetAddress').value;
    const targetEmail = document.getElementById('targetEmail').value;
    const targetSocial = document.getElementById('targetSocial').value;
    const targetOther = document.getElementById('targetOther').value;
    const targetPseudo = document.getElementById('targetPseudo').value;

    const doxInfo = `
        ███████╗███████╗██████╗░███████╗██╗██╗░░░░░██╗░░░██╗░░
        ██╔════╝██╔════╝██╔══██╗██╔════╝██║██║░░░░░██║░░░██║░░
        ███████╗█████╗░░██████╦╝█████╗░░██║██║░░░░░██║░░░██║░░░
        ╚════██║██╔══╝░░██╔══██╗██╔══╝░░██║██║░░░░░██║░░░██║░░░
        ███████║███████╗██████╦╝███████╗██║███████╗╚██████╔╝░░░
        ╚══════╝╚══════╝╚═════╝░╚══════╝╚═╝╚══════╝░╚═════╝░░░
        
        ██████╗░███████╗░█████╗░
        ██╔══██╗██╔════╝██╔══██╗
        ██║░░██║█████╗░░██║░░██║
        ██║░░██║██╔══╝░░██║░░██║
        ██████╔╝███████╗╚█████╔╝
        ╚═════╝░╚══════╝░╚════╝░

        ███████╗██████╗░███████╗██╗██╗░░░░░██╗░░░██╗░░
        ██╔════╝██╔══██╗██╔════╝██║██║░░░░░██║░░░██║░░
        ███████╗██████╔╝█████╗░░██║██║░░░░░██║░░░██║░░░
        ╚════██║██╔══██╗██╔══╝░░██║██║░░░░░██║░░░██║░░░
        ███████║██║░░██║███████╗██║███████╗╚██████╔╝░░░
        ╚══════╝╚═╝░░╚═╝╚══════╝╚═╝╚══════╝░╚═════╝░░░

        Target Name: ${targetName}
        Age: ${targetAge}
        Phone: ${targetPhone}
        Address: ${targetAddress}
        Email: ${targetEmail}
        Social Media: ${targetSocial}
        Other Info: ${targetOther}
        Pseudo Courant: ${targetPseudo}
    `;

    searchResults.innerHTML = `
        <h2>Search Results:</h2>
        <pre class="ascii-art">${doxInfo}</pre>
        <a id="downloadLink" download="fiche_dox.txt" href="#">Download Fiche</a>
    `;

    const downloadLink = document.getElementById('downloadLink');
    downloadLink.addEventListener('click', function() {
        const blob = new Blob([doxInfo], { type: 'text/plain' });
        downloadLink.href = URL.createObjectURL(blob);
    });
});

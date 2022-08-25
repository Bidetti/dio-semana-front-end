import { subscribeData } from "./firebase/data.js";

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () => {
    const name = txtName.value;
    const email = txtEmail.value;
    const level = txtLevel.value;
    const character = txtCharacter.value;
    const data = {
        name,
        email,
        level,
        character
    };
    const id = await subscribeData(data);
    alert(`Inscrição confirmada com o UUID: "${id}"!`)
});
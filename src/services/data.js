import axios from "axios";

const apiUrl = "http://localhost:3001/characters";

export const getCharacters = async () =>
  await axios.get(apiUrl).then((response) => response.data);

export const getCharacterDetails = async (character) =>
  await axios.get(`${apiUrl}/${character}`).then((response) => response.data);

export const addCharacter = async (character) =>
  await axios.post(apiUrl, character).then((response) => response.data);

export const updateCharacter = async (character) =>
  await axios
    .put(`${apiUrl}/${character.id}`, character)
    .then((response) => response.data);

export const deleteCharacter = async (character) =>
  await axios
    .delete(`${apiUrl}/${character.id}`, character)
    .then((response) => response.data);

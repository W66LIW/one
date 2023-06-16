
const handleRemoveClick = (e) => {
    e.preventDefault();
    setPersons(Object.assign([], persons).filter((person, index) => index !== persons.indexOf(editablePersonData.person)));
    setPersonData(personInput);

  }

export default handleRemoveClick;
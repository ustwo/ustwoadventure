import { useState } from "react";

export default (initialMode = false) => {
    const [modalIsOpen, setModalIsOpen] = useState(initialMode);
    return [modalIsOpen, setModalIsOpen];
};

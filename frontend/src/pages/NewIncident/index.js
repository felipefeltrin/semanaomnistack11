import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            history.push('/profile');
        } catch (err) {
            alert("Erro ao cadastrar o caso, tente novamente");
        }
    }
    return (
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo Be the hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para te salvar.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Descrição do caso" value={description} onChange={e => setDescription(e.target.value)} />
                    <input placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)} />

                    <button className="button">Salvar</button>
                </form>
            </div>
        </div>
    )
}
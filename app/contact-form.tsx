'use client'

import { useMemo, useState } from 'react'

const WHATSAPP_NUMBER = '59894009370'

export function ContactForm() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [reason, setReason] = useState('Pedido de presupuesto')
  const [message, setMessage] = useState('')

  const whatsappHref = useMemo(() => {
    const lines = [
      'Hola, vengo desde la web de La Casa del Panadero.',
      `Nombre: ${name || '-'}`,
      `Contacto: ${contact || '-'}`,
      `Motivo: ${reason || '-'}`,
      `Mensaje: ${message || '-'}`,
    ]

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
  }, [contact, message, name, reason])

  return (
    <form className="form">
      <input placeholder="Nombre" value={name} onChange={(event) => setName(event.target.value)} />
      <input
        placeholder="Teléfono o email"
        value={contact}
        onChange={(event) => setContact(event.target.value)}
      />
      <select value={reason} onChange={(event) => setReason(event.target.value)}>
        <option>Pedido de presupuesto</option>
        <option>Servicio técnico</option>
        <option>Consulta general</option>
      </select>
      <textarea
        placeholder="Mensaje"
        rows={5}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <a className="btn btn-dark" href={whatsappHref} target="_blank" rel="noreferrer">
        Enviar por WhatsApp
      </a>
      <small>
        Este formulario arma el mensaje y lo envía directo a WhatsApp, sin depender de un panel de
        administración.
      </small>
    </form>
  )
}

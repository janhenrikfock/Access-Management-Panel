import './Modal.css'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function Modal({
  openPerson,
  setOpenPerson,
  workers,
  setWorkers,
}) {
  const { register, handleSubmit, setValue, errors } = useForm()
  useEffect(() => {
    if (openPerson) {
      setValue('company', openPerson.company)
      setValue('role', openPerson.role)
      setValue('card', openPerson.card)
    }
  }, [openPerson, setValue])

  const onSubmit = (data) => {
    const updatedData = {
      name: openPerson.name,
      surname: openPerson.surname,
      id: openPerson.id,
      role: data.role,
      company: data.company,
      card: data.card,
    }
    const markedIndex = workers.findIndex(
      (worker) => worker.id === openPerson.id
    )
    const prev = workers.slice(0, markedIndex)
    const following = workers.slice(markedIndex + 1)

    const newArray = [...prev, updatedData, ...following]

    setWorkers(newArray)
    setOpenPerson()
  }

  if (openPerson === undefined || openPerson === {}) {
    return null
  } else {
    return (
      <>
        <div className="modalShadow" onClick={() => setOpenPerson()}></div>
        <div className="modalContainer">
          <h1 className="modalHeadline">Mitarbeiter bearbeiten:</h1>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2>{openPerson.name + ' ' + openPerson.surname}</h2>
            <label htmlFor="company">Firma</label>
            <input className="textinput" name="company" ref={register} />
            <label htmlFor="role">Zutrittsgruppe (Rolle)</label>
            <input className="textinput" name="role" ref={register} />

            <label htmlFor="card">Kartennummer (mind 6 Ziffern)</label>
            <input
              className="textinput"
              name="card"
              ref={register({ required: true, minLength: 6 })}
            />
            {errors.card && (
              <p>Die Kartennummer muss mindestens 6 Ziffern haben</p>
            )}
            <label>Data.id</label>
            <p>{openPerson.id}</p>
            <input type="submit" value="Daten speichern" />
          </form>
        </div>
      </>
    )
  }
}

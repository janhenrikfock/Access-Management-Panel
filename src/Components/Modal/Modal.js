import './Modal.css'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function Modal({
  openPerson,
  setOpenPerson,
  workers,
  setWorkers,
  openCompany,
  setOpenCompany,
}) {
  const { register, handleSubmit, setValue, errors } = useForm()

  // Prefill Inputfields
  useEffect(() => {
    if (openPerson) {
      setValue('company', openPerson.company)
      setValue('role', openPerson.role)
      setValue('card', openPerson.card)
    }
  }, [openPerson, setValue])

  const onSubmit = (data) => {
    const updatedWorker = {
      name: openPerson.name,
      surname: openPerson.surname,
      id: openPerson.id,
      role: data.role,
      company: data.company,
      card: data.card,
    }

    const indexMarkedWorker = findIndexOpenWorker(workers, openPerson)
    const otherWorkers = extractOtherWorkers(indexMarkedWorker, workers)
    setWorkers([...otherWorkers, updatedWorker])

    const indexCompanyMember = findIndexOpenWorker(openCompany, openPerson)
    const restOfCompany = extractOtherWorkers(indexCompanyMember, openCompany)
    setOpenCompany([...restOfCompany, updatedWorker])

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
            <input
              className="textinput"
              name="company"
              ref={register({ required: true, minLength: 2 })}
            />
            {errors.company && (
              <p>*Ein Firmenname muss angegeben werden. Mind 2 Zeichen.</p>
            )}

            <label htmlFor="role">Zutrittsgruppe (Rolle)</label>
            <input
              className="textinput"
              name="role"
              ref={register({ required: true, minLength: 4 })}
            />
            {errors.role && (
              <p>*Ein Rollenname muss mindestens 4 Zeichen lang sein</p>
            )}

            <label htmlFor="card">Kartennummer (mind 6 Ziffern)</label>
            <input
              className="textinput"
              name="card"
              ref={register({ required: true, minLength: 6 })}
            />
            {errors.card && (
              <p>*Die Kartennummer muss mindestens 6 Ziffern haben</p>
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

function findIndexOpenWorker(arrayOfWorkers, openPerson) {
  const indexOpenWorker = arrayOfWorkers.findIndex(
    (oneWorker) => oneWorker.id === openPerson.id
  )
  return indexOpenWorker
}

function extractOtherWorkers(index, array) {
  const newWorkers = [...array]
  newWorkers.splice(index, 1)
  return newWorkers
}

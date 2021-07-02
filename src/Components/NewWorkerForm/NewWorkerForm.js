import './NewWorkerForm.css'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

export default function NewWorkerForm({
  renderNewWorker,
  setRenderNewWorker,
  workers,
  setWorkers,
}) {
  const { register, handleSubmit, errors } = useForm()

  function onSubmit(data, e) {
    const newArray = [...workers, { ...data }]
    setWorkers(newArray)
    e.target.reset()
    setRenderNewWorker(false)
  }

  if (renderNewWorker) {
    return (
      <>
        <div
          className="modalShadow"
          onClick={() => {
            setRenderNewWorker(false)
          }}
        ></div>
        <div className="modalContainer">
          <h1 className="modalHeadline">Mitarbeiter anlegen:</h1>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label className="inputLabel" htmlFor="name">
              Name
            </label>
            <input
              className="textInput"
              name="name"
              ref={register({ required: true })}
            ></input>
            {errors.name && <p>*Gib den Vornamen ein</p>}

            <label className="inputLabel" htmlFor="surname">
              Nachname
            </label>
            <input
              className="textInput"
              name="surname"
              ref={register({ required: true })}
            />
            {errors.surname && <p>*Gib den Nachnamen ein</p>}

            <label className="inputLabel" htmlFor="company">
              Firma
            </label>
            <input
              className="textInput"
              name="company"
              ref={register({ required: true })}
            />
            {errors.company && <p>*Gib den Firmennamen ein</p>}

            <label className="inputLabel" htmlFor="role">
              Zutrittsgruppe (Rolle)
            </label>
            <input
              className="textInput"
              name="role"
              ref={register({ required: true })}
            />
            {errors.role && <p>*Gib den namen der Zugangsrolle ein</p>}

            <label className="inputLabel" htmlFor="card">
              Kartennummer (mind 6 Ziffern)
            </label>
            <input
              className="textInput"
              name="card"
              ref={register({ required: true })}
            />
            {errors.card && <p>*Gib die Seriennummer der Accesskarte ein</p>}

            <label className="inputLabel" htmlFor="id">
              Data.id
            </label>
            <input
              className="textInput"
              name="id"
              ref={register({ required: true })}
            ></input>
            {errors.id && <p>*Gib eine gültige data-id ein</p>}

            <input className="submit" type="submit" value="Daten speichern" />
          </form>
        </div>
      </>
    )
  } else {
    return null
  }
}
NewWorkerForm.propTypes = {
  renderNewWorker: PropTypes.bool,
  setRenderNewWorker: PropTypes.func,
  workers: PropTypes.array,
  setWorkers: PropTypes.func,
}

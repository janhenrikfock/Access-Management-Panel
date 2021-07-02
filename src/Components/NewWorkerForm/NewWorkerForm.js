import './NewWorkerForm.css'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

export default function NewWorkerForm({
  renderNewWorker,
  setRenderNewWorker,
  workers,
  setWorkers,
}) {
  const { register, handleSubmit } = useForm()

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
            <input className="textInput" name="name" ref={register}></input>
            <label className="inputLabel" htmlFor="surname">
              Nachname
            </label>
            <input className="textInput" name="surname" ref={register}></input>
            <label className="inputLabel" htmlFor="company">
              Firma
            </label>
            <input className="textInput" name="company" ref={register} />
            <label className="inputLabel" htmlFor="role">
              Zutrittsgruppe (Rolle)
            </label>
            <input className="textInput" name="role" ref={register} />
            <label className="inputLabel" htmlFor="card">
              Kartennummer (mind 6 Ziffern)
            </label>
            <input className="textInput" name="card" ref={register} />
            <label className="inputLabel" htmlFor="id">
              Data.id
            </label>
            <input className="textInput" name="id" ref={register}></input>
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

import './NewWorkerForm.css'
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
            <label htmlFor="name">Name</label>
            <input className="textinput" name="name" ref={register}></input>
            <label htmlFor="surname">Nachname</label>
            <input className="textinput" name="surname" ref={register}></input>
            <label htmlFor="company">Firma</label>
            <input className="textinput" name="company" ref={register} />
            <label htmlFor="role">Zutrittsgruppe (Rolle)</label>
            <input className="textinput" name="role" ref={register} />
            <label htmlFor="card">Kartennummer (mind 6 Ziffern)</label>
            <input className="textinput" name="card" ref={register} />
            <label htmlFor="id">Data.id</label>
            <input className="textinput" name="id" ref={register}></input>
            <input type="submit" />
          </form>
        </div>
      </>
    )
  } else {
    return null
  }
}

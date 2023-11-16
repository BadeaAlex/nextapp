export default function Home() {
  return (
    <div>
      <p className='Tab'>
        Account
      </p>
      {newNote()}
      {library()}
      {importNote()}
    </div>
  )
}

let newNote = () => {
  return (
    <div>
      <p className="newNote">
        New note
      </p>
    </div>
  )
}
let library = () => {
  return (
    <div>
      <p>
        Library
      </p>
    </div>
  )
}
let importNote = () => {
  return (
    <div>
      <p>
        Import Notes
      </p>
    </div>
  )
}


function Term({term, key, toggleTask, removeTask}) {
  return (
    <div key={term.id} className="item-todo">
      <div className={term.complete ? "item-text strike" : "item-text"}
      onClick={() => {toggleTask(term.id)}}>
        {term.task}
      </div>
      <div className="item-delete" onClick={() => {removeTask(term.id)}}>
              X</div>
    </div>


  );
}

export default Term;
import './Tables2.css';

function Tables2({tableno,book}) {
  return (
    <div className="Tables2">
        <div className="tab2">
            <p className="Tno">{tableno}</p>
        </div>
        <div className={'1'===book ? 'chair1 booked' : 'chair1 '}></div>
        <div className={'1'===book ? 'chair2 booked' : 'chair2 '}></div>
    </div>
  )
}

export default Tables2
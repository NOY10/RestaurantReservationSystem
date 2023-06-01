import './Tables4.css'

function Tables4({key,tableno,name}) {
  return (
    <div className="Tables4" key={key}>
        <div className="tab4">
            <p className="Tno">{tableno}</p>
        </div>
        <div className={null==name ? 'chair1' : 'chair1 booked'}></div>
        <div className={null==name ? 'chair2' : 'chair2 booked'}></div>
        <div className={null==name ? 'chair3' : 'chair3 booked'}></div>
        <div className={null==name ? 'chair4' : 'chair4 booked'}></div>
    </div>
  )
}

export default Tables4
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
        <nav>
            <h1 style={{float:"right", marginRight:"100px", color:"black"}}>Welcome Admin</h1>
        </nav>
        <table class="tableD">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Table No</th>
                    <th>Bill</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >Lobzang</td>
                    <td >22/12/2021</td>
                    <td >10:00 A.M</td>
                    <td >1</td>
                    <td >1000</td>
                    <td ><a href="#" class="btnD btn__active">DELETE</a></td>
                </tr>
                <tr>
                    <td >Dechen</td>
                    <td >29/12/2021</td>
                    <td >9:00 A.M</td>
                    <td >3</td>
                    <td>2000</td>
                    <td ><a href="#" class="btnD btn__active">DELETE</a></td>
                </tr>
                <tr>
                    <td >Sumit</td>
                    <td >19/12/2021</td>
                    <td >12:00 P.M</td>
                    <td >2</td>
                    <td>1500</td>
                    <td ><a href="#" class="btnD btn__active">DELETE</a></td>
                </tr>
                <tr>
                    <td >Udap</td>
                    <td >10/12/2021</td>
                    <td >2:00 P.M</td>
                    <td >7</td>
                    <td>3000</td>
                    <td ><a href="#" class="btnD btn__active">DELETE</a></td>
                </tr>
                <tr>
                    <td >Ugyen</td>
                    <td >1/12/2021</td>
                    <td >8:00 PM</td>
                    <td >6</td>
                    <td>4300</td>
                    <td ><a href="#" class="btnD btn__active">DELETE</a></td>
                </tr>
            </tbody>
        </table>  
    </div>
  )
}

export default Dashboard
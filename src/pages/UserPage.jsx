import "./UserPage.css"

function UserPage() {
  return (
    <div className="container-fluid border user-container ">
      <div className="user-content ">
        <div className="user-left ">
          <div className="user-card-image">
            <img src="https://picsum.photos/200/200"></img>

            <h4> Yağmur Kiraz Yıldız</h4>
            
          </div>
        </div>
        <div className="user-right"></div>
      </div>
    </div>
  );
}

export default UserPage;

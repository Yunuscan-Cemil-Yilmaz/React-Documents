import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const StyleComponent = () => {    
    return (
        <>
            <div className="btn btn-primary">bootstrap btn</div>
            <div className="scss-area">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni amet dolorum fugiat ex non placeat.</div>

            <div onClick={() => {
                alertify.success('Başarılı işlem!');
            }} className="btn btn-success">alertify success event</div>

            <div onClick={() => {
                alertify.error('Başarısız İşlem!');
            }} className="btn btn-danger">alertify success event</div>

            <div onClick={() => {
                alertify.warning('Dikkat!');
            }} className="btn btn-warning">alertify success event</div>

            <div onClick={() => {
                alertify.message('Bilgilendirme mesajı.');
            }} className="btn btn-info">alertify success event</div>

            <div onClick={() => {
                alertify.prompt("Write your name:", "Default Value", function (evt, value) {
                    alertify.success("Your Name: " + value);
                }, function () {
                    alertify.error("Canceled!");
                });                
            }} className="btn btn-primary">alertify get prompt event</div>

            <div onClick={() => {
                alertify.confirm("Emin misiniz?", function () {
                    alertify.success("Onaylandı!");
                }, function () {
                    alertify.error("İptal edildi!");
                });                
            }} className="btn btn-success">alertify confirm event</div>
            
            <div onClick={() => {
                alertify.notify("This is a custom alert.", "success", 5);
            }} className="btn btn-info">alertify timed alert event</div>
        </>
    )
}

export default StyleComponent;
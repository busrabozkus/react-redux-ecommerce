import React from 'react'

function Contact() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 my-4 py-4 text-center'>
                        <h1>Bize Yazın</h1>
                        <hr />


                    </div>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <img src='images/contact.jpg' alt="Contact" width="500px" height="350px"></img>
                    </div>
                    

                    <div className='col-md-6'>
                        <form>
              
                            <div class="mb-3 col-md-6">
                        
                                <label for="exampleForm" class="form-label">Ad Soyad :
                                </label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Büşra Bozkuş" />
                            </div>
                          
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address :</label>
                                    <input type="email" class="form-control" id="exampleForm" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Aşağıdaki Alanı Doldurunuz :</label>
                                    <textarea class="form-control" id="exampleFormControl" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-dark">Gönder</button>



                           
                        </form>

                    </div>

                </div>
            </div>
            </div>
            )
}

            export default Contact
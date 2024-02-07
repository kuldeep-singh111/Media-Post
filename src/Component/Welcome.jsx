import React from 'react'

const Welcome = ({ onGetPostClick }) => {
    return (
        <>


            {/* <h1>  There are no Posts!</h1> */}

            {/* <button type="button" onClick={onGetPostClick} classNameName="btn btn-primary">Add Posts</button> */}





            <center className='welcome-message'>


                <div className="col-lg-5 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world'
                        s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components,
                        and powerful JavaScript plugins.</p>

                </div>
            </center>
        </>
    )
}

export default Welcome

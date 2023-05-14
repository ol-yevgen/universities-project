export const Form = () => {
   return(
       <form action="" className="form">
           <label htmlFor="name" className="form__title">Input country</label>
           <input type="text" name="name" placeholder="Ukraine" className="form__input" autocomplite="off"/>
           <div className="form__action">
               <button type="submit" className="btn form__submit">Submit</button>
               <button type="reset" className="btn form__reset">Reset</button>
           </div>
       </form>
   )
}
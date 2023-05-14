export const Form = ({ onReset }) => {
   return(
       <form action="" className="form">
           <label htmlFor="name" className="form__title">Choose the country in which you will study</label>
           <input
               type="text"
               name="name"
               placeholder="Ukraine"
               className="form__input"
               autocomplite="off"
           />
           <div className="form__action">
               <button
                   type="submit"
                   className="btn form__submit"
               >Submit</button>
               <button
                   type="reset"
                   className="btn form__reset"
               >Reset</button>
           </div>
       </form>

   )
}
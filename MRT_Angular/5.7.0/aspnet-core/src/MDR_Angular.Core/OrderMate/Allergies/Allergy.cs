using Abp.Domain.Entities;
using MDR_Angular.OrderMate.MenuItemAllergies;
using System.Collections.Generic;


namespace MDR_Angular.OrderMate.Allergies
{
    public class Allergy: Entity<int>
    {
        //public int AllergyId { get; set; }
        public string Allergy1 { get; set; }

        public virtual ICollection<MenuItemAllergy> MenuItemAllergy { get; set; }
    }
}

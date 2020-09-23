﻿using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Allergies;
using MDR_Angular.OrderMate.MenuItems;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemAllergies
{
    public class MenuItemAllergy: Entity<int>
    {
        //public int MenuItemAllergyId { get; set; }
        public int MenuItemIdFk { get; set; }
        public int AllergyIdFk { get; set; }

        [ForeignKey("AllergyIdFk")]
        public virtual Allergy AllergyIdFkNavigation { get; set; }
        [ForeignKey("MenuItemIdFk")]
        public virtual MenuItem MenuItemIdFkNavigation { get; set; }
    }
}

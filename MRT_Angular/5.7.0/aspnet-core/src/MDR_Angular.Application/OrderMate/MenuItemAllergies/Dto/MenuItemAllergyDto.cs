using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemAllergies.Dto
{
    [AutoMapFrom(typeof(MenuItemAllergy))]
    [AutoMapTo(typeof(MenuItemAllergy))]
    public class MenuItemAllergyDto
    {
        public int MenuItemIdFk { get; set; }
        public int AllergyIdFk { get; set; }
    }
}

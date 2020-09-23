using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemCategories.Dto
{
    [AutoMapFrom(typeof(MenuItemCategory))]
    [AutoMapTo(typeof(MenuItemCategory))]
    public class MenuItemCategoryCandUDto
    {
        public string MenuItemCategory1 { get; set; }
    }
}

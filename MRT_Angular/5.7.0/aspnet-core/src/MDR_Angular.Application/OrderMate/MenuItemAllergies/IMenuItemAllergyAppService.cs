using Abp.Application.Services;
using MDR_Angular.OrderMate.MenuItemAllergies.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.MenuItemAllergies
{
    public interface IMenuItemAllergyAppService: IAsyncCrudAppService<MenuItemAllergyDto>
    {
    }
}

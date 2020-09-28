using Abp.Application.Services;
using MDR_Angular.OrderMate.ItemTypeMenuItems.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.ItemTypeMenuItems
{
    public interface IItemTypeMenuItemAppService: IAsyncCrudAppService<ItemTypeMenuItemDto>
    {
    }
}

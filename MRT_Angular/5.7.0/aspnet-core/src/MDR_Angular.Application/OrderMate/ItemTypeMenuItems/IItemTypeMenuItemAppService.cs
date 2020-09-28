using Abp.Application.Services;
using MDR_Angular.OrderMate.ItemTypeMenuItems.Dto;

namespace MDR_Angular.OrderMate.ItemTypeMenuItems
{
    public interface IItemTypeMenuItemAppService : IAsyncCrudAppService<ItemTypeMenuItemDto>
    {
    }
}

using Abp.Application.Services;
using MDR_Angular.OrderMate.MenuItems.Dto;

namespace MDR_Angular.OrderMate.MenuItems
{
    public interface IMenuItemAppService : IAsyncCrudAppService<MenuItemDto>
    {
    }
}

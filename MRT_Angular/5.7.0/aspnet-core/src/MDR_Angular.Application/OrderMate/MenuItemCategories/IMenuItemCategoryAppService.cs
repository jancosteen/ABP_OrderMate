using Abp.Application.Services;
using MDR_Angular.OrderMate.MenuItemCategories.Dto;

namespace MDR_Angular.OrderMate.MenuItemCategories
{
    public interface IMenuItemCategoryAppService : IAsyncCrudAppService<MenuItemCategoryDto>
    {
    }
}

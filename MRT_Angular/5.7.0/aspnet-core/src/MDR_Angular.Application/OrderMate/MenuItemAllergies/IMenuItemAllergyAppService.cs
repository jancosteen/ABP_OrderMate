using Abp.Application.Services;
using MDR_Angular.OrderMate.MenuItemAllergies.Dto;

namespace MDR_Angular.OrderMate.MenuItemAllergies
{
    public interface IMenuItemAllergyAppService : IAsyncCrudAppService<MenuItemAllergyDto>
    {
    }
}

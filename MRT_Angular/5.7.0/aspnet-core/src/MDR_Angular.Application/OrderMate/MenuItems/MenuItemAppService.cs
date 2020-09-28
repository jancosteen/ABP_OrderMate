using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using MDR_Angular.OrderMate.MenuItems.Dto;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace MDR_Angular.OrderMate.MenuItems
{
    [AbpAuthorize(PermissionNames.Pages_MI)]
    public class MenuItemAppService : AsyncCrudAppService<
        MenuItem, MenuItemDto, int, PagedAndSortedResultRequestDto, MenuItemDto>, IMenuItemAppService
    {
        public MenuItemAppService(IRepository<MenuItem> repository) : base(repository) { }

        protected override IQueryable<MenuItem> CreateFilteredQuery(PagedAndSortedResultRequestDto input)
        {
            return base.CreateFilteredQuery(input)
                .Include(i => i.MenuItemAllergy).ThenInclude(i => i.MenuItemIdFkNavigation)
                .Include(i => i.MenuItemCategoryIdFkNavigation).ThenInclude(i => i.MenuItemCategory1)
                .Include(i => i.MenuItemPriceIdFkNavigation).ThenInclude(i => i.MenuItemPrice1);


        }
    }
}

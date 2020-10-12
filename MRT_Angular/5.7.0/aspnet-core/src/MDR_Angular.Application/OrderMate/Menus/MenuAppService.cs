using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace MDR_Angular.OrderMate.Menus
{
    [AbpAuthorize(PermissionNames.Pages_M)]
    public class MenuAppService : AsyncCrudAppService<
        Menu, MenuDto, int, PagedAndSortedResultRequestDto, MenuDto>, IMenuAppService
    {
        public MenuAppService(IRepository<Menu> repository) : base(repository) { }

        protected override IQueryable<Menu> CreateFilteredQuery(PagedAndSortedResultRequestDto input)
        {
            return base.CreateFilteredQuery(input)
                .Include(i => i.MenuRestaurant);
                
        }
    }
}

using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace MDR_Angular.OrderMate.Restaurants
{
    [AbpAuthorize(PermissionNames.Pages_REST)]
    public class RestaurantAppService : AsyncCrudAppService<
         Restaurant, RestaurantDto, int, PagedAndSortedResultRequestDto, RestaurantDto>, IRestaurantAppService
    {
        public RestaurantAppService(IRepository<Restaurant> repository) : base(repository) { }

        protected override IQueryable<Restaurant> CreateFilteredQuery(PagedAndSortedResultRequestDto input)
        {
            return base.CreateFilteredQuery(input)
                .Include(i => i.QrCode)
                .Include(i=> i.RestaurantStatusIdFkNavigation)
                .Include(i => i.Menu)
                .Include(i => i.ResaurantFacilityRef).ThenInclude(x => x.RestaurantFacilityIdFkNavigation)
                .Include(i => i.RestaurantAdvertisement)
                .Include(i => i.RestaurantImage)
                .Include(i => i.RestaurantTypeReference).ThenInclude(x => x.RestaurantTypeIdFkNavigation)
                .Include(i => i.UserComment).ThenInclude(x => x.StarRatingIdFkNavigation);
        }
    }
}

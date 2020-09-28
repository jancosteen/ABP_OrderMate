using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;

namespace MDR_Angular.OrderMate.Restaurants
{
    [AbpAuthorize(PermissionNames.Pages_REST)]
    public class RestaurantAppService : AsyncCrudAppService<
         Restaurant, RestaurantDto, int, PagedAndSortedResultRequestDto, RestaurantDto>, IRestaurantAppService
    {
        public RestaurantAppService(IRepository<Restaurant> repository) : base(repository) { }
    }
}

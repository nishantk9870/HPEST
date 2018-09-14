angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, $ionicSideMenuDelegate, $ionicLoading, $http) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.data = {};
    $ionicModal.fromTemplateUrl('templates/inspectionModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.sucessModal = $ionicModal.fromTemplateUrl('templates/successModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (sucessModal) {
      $scope.sucessModal = sucessModal;
    });
    $scope.warning = $ionicModal.fromTemplateUrl('templates/warningModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (warning) {
      $scope.warning = warning;
    });

    $scope.inspectionSubmit = function () {
      $ionicLoading.show({
        noBackdrop :false,
        template: ' <ion-spinner icon="lines"></ion-spinner>'
    });
      var url = "http://www.hpests.com/index.php"
      var formData = new FormData();
      formData.append("service", $scope.data.pest.text);
      formData.append("services", $scope.data.pest.text);
      formData.append("service_type", $scope.data.pest.text);
      formData.append("house_type", $scope.data.pest.text);
      formData.append("txtName", $scope.data.name);
      formData.append("txtEmail", $scope.data.email);
      formData.append("txtPhone", $scope.data.phone);
      formData.append("txtComments", $scope.data.comment);
      formData.append("submitQuote", "ASK A QUOTE");
      $http.post(url, formData, {
        headers: {
          'Content-Type': undefined
        }
      }, ).success(function (response) {
        $ionicLoading.hide();
        $scope.modal.hide();        
        $scope.sucessModal.show()
      }).error(function(err){
        $ionicLoading.hide();
        $scope.warning.show();
      });
    }

    $scope.pestTypes = [{
      id: 1,
      text: 'Ants'
    }, {
      id: 2,
      text: 'bed bugs'
    }, {
      id: 3,
      text: 'Box Elder Bugs'
    }, {
      id: 4,
      text: 'earwing'
    }, {
      id: 5,
      text: 'Flies'
    }, {
      id: 6,
      text: 'fleas'
    }, {
      id: 7,
      text: 'fruit flies'
    }, {
      id: 8,
      text: 'Millipedes'
    }, {
      id: 9,
      text: 'mites'
    }, {
      id: 10,
      text: 'MOSQUITOES'
    }, {
      id: 11,
      text: 'rats'
    }, {
      id: 12,
      text: 'snakes'
    }, {
      id: 13,
      text: 'stink bugs'
    }, {
      id: 14,
      text: 'termites'
    }, {
      id: 15,
      text: 'weevils'
    }, {
      id: 16,
      text: 'cockroach'
    }, {
      id: 17,
      text: 'lizards'
    }];

    $scope.menuItems = [{
      id: 1,
      isLogo: true
    }, {
      id: 2,
      name: 'Home',
      path: 'app.home'
    }, {
      id: 3,
      name: 'About Us',
      path: 'app.aboutus'
    }, {
      id: 4,
      name: 'Services',
      showSubMenu: false,
      subMenu: [{
        id: 5,
        name: '- Residential Pest Control',
        path: 'app.residentialPestControl'
      }, {
        id: 6,
        name: '- Commercial Pest Control',
        path: 'app.commercialPestControl'
      }, {
        id: 7,
        name: '- Industrial Pest Control',
        path: 'app.environmentallyFriendly'
      }]
    }, {
      id: 8,
      name: 'Pests',
      showSubMenu: false,
      subMenu: [{
        id: 9,
        name: '- Ants',
        path: 'app.ants'
      }, {
        id: 10,
        name: '- Box Elder Bugs',
        path: 'app.boxElderBugs'
      }, {
        id: 11,
        name: '- Cockroach',
        path: 'app.cockroach'
      }, {
        id: 12,
        name: '- Fruit Flies',
        path: 'app.fruitFlies'
      }, {
        id: 13,
        name: '- Mosquitoes',
        path: 'app.mosquitoes'
      }, {
        id: 14,
        name: '- Stink Bugs',
        path: 'app.stinkBugs'
      }, {
        id: 16,
        name: '- Earwing',
        path: 'app.earwing'
      }, {
        id: 17,
        name: '- Gnats',
        path: 'app.gnats'
      }, {
        id: 18,
        name: '- Rats',
        path: 'app.rats'
      }, {
        id: 19,
        name: '- Termites',
        path: 'app.termites'
      }, {
        id: 20,
        name: '- Bed Bugs',
        path: 'app.bedBugs'
      }, {
        id: 21,
        name: '- Flies',
        path: 'app.flies'
      }, {
        id: 22,
        name: '- Millipedes',
        path: 'app.millipedes'
      }, {
        id: 23,
        name: '- Snakes',
        path: 'app.snakes'
      }, {
        id: 24,
        name: '- Weevils',
        path: 'app.weevils'
      },{
        id: 25,
        name: '- Mites',
        path: 'app.mites'
      }, {
        id: 26,
        name: '- Fleas',
        path: 'app.fleas'
      }, {
        id: 27,
        name: '- Lizards',
        path: 'app.lizards'
      }]
    }, {
      id: 28,
      name: 'Book Now',
      path: 'app.bookNow'
    }, {
      id: 29,
      name: 'Contact Us',
      path: 'app.contactus'
    }];

    $scope.closeSideMenu = function () {
      angular.forEach($scope.menuItems, function (menuItem) {
        if (menuItem.hasOwnProperty('showSubMenu'))
          menuItem.showSubMenu = false;
      });
      $ionicSideMenuDelegate.toggleLeft();
    }

    $scope.openInspection = function () {
      $scope.data = {};
      $scope.modal.show();
    }

    $scope.closePopUp = function () {
      $scope.modal.hide();
    }

    $scope.navigateTo = function (path) {
      $state.go(path, {});
    }

    $scope.navigateToMenu = function (menu) {
      if (menu.path) {
        angular.forEach($scope.menuItems, function (menuItem) {
          if (menuItem.hasOwnProperty('showSubMenu'))
            menuItem.showSubMenu = false;
        });
        $ionicSideMenuDelegate.toggleLeft();
        $state.go(menu.path, {});
      } else if (!menu.path && menu.subMenu) {
        angular.forEach($scope.menuItems, function(menuItem){
          if (menuItem.hasOwnProperty('showSubMenu') && menuItem.id != menu.id)
            menuItem.showSubMenu = false;
        });
        menu.showSubMenu = !menu.showSubMenu;
      }
    }
    $scope.$watch(function () {
      return $ionicSideMenuDelegate.isOpen();
    }, function (value) {
      if (!value) {
        angular.forEach($scope.menuItems, function (menuItem) {
          if (menuItem.hasOwnProperty('showSubMenu'))
            menuItem.showSubMenu = false;
        });
      }
    });
  })

  .controller('contactusCtrl', function ($scope, $http, $ionicModal, $ionicLoading) {
    $scope.data = {};

    $scope.warning = $ionicModal.fromTemplateUrl('templates/warningModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (warning) {
      $scope.warning = warning;
    });

    $scope.sucessModal = $ionicModal.fromTemplateUrl('templates/successModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (sucessModal) {
      $scope.sucessModal = sucessModal;
    });

    $scope.contactusSubmit = function () {
      $ionicLoading.show({
        noBackdrop: false,
        template: ' <ion-spinner icon="lines"></ion-spinner>'
      });
      var url = "http://www.hpests.com/contact-us.php"
      var formData = new FormData();
      formData.append("txtName", $scope.data.name);
      formData.append("txtEmail", $scope.data.email);
      formData.append("txtPhone", $scope.data.phone);
      formData.append("txtComments", $scope.data.message);
      formData.append("hid_submit", "Submit");
      $http.post(url, formData, {
        headers: {
          'Content-Type': undefined
        }
      }, ).success(function (response) {
        $scope.data = {};
        $ionicLoading.hide();
        $scope.sucessModal.show();
      }).error(function (err) {
        $scope.data = {};
        $ionicLoading.hide();
        $scope.warning.show();
      });
    }
  })

  .controller('homeCtrl', function ($scope, $state) {
    $scope.data = {};
    $scope.items = [{
      id: 1,
      route: "app.termites",
      name: "Termites"
    }, {
      id: 2,
      route: "app.cockroach",
      name: "Cockroach"
    }, {
      id: 3,
      route: "app.mosquitoes",
      name: "Mosquitoes"
    }, {
      id: 4,
      route: "app.ants",
      name: "Ants"
    }, {
      id: 5,
      route: "app.flies",
      name: "Flies"
    }];
      //some options to pass to our slider
      $scope.data.sliderOptions = {
        initialSlide: 0,
        direction: 'horizontal', //or vertical
        speed: 2000, //0.2s transition
        autoplay: 300,
        loop: true
      };

      $scope.data.slider2Options = {
        initialSlide: 0,
        direction: 'horizontal', //or vertical
        speed: 3000, //0.3s transition
        autoplay: 300,
        loop: true
      };

      //create delegate reference to link with slider
      $scope.data.sliderDelegate = null;
      //watch our sliderDelegate reference, and use it when it becomes available
      // $scope.$watch('data.sliderDelegate', function (newVal, oldVal) {
      //   if (newVal != null) {
      //     $scope.data.sliderDelegate.on('slideChangeEnd', function () {
      //       $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
      //       // $scope.$apply() //to refresh any content external to the slider
      //       $scope.$apply();
      //     });
      //   }
      // });

      $scope.data.slider2Delegate = null;
      //watch our sliderDelegate reference, and use it when it becomes available
      // $scope.$watch('data.slider2Delegate', function (newVal, oldVal) {
      //   if (newVal != null) {
      //     $scope.data.slider2Delegate.on('slideChangeEnd', function () {
      //        $scope.data.currentPage = $scope.data.slider2Delegate.activeIndex;
      //       //use  $scope.$apply() //to refresh any content external to the slider
      //       $scope.$apply();
      //     });
      //   }
      // });

       $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
         // data.slider is the instance of Swiper
         $scope.slider = data.slider;
       });
      
      
       $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
         // note: the indexes are 0-based
         $scope.activeIndex = data.slider.activeIndex;
         $scope.previousIndex = data.slider.previousIndex;
       });
    
    $scope.navigateTo = function (path) {
      $state.go(path, {});
    }


    //new slider test code to check how its working . 
    function showBanner(index) {
      var oldElm = document.querySelector('.slider ion-slide.slider-slide.current');
      var q = '.slider ion-slide.slider-slide[data-index="' + index + '"]';
      var elm = document.querySelector(q);

      // Remove class "current"
      if (null !== oldElm) {
        oldElm.classList.remove("current");
      }

      // Add class "current" to current slide
      if (null !== elm) {
        elm.classList.add("current");
      }
    }

    $scope.activeSlide = 0;

    setTimeout(function () {
      showBanner($scope.activeSlide);
    }, 100);

    $scope.slideChanged = showBanner;


    $scope.area = [{
      id: 0,
      text: 'AREA'
    }, {
      id: 1,
      text: 'Commercial Pest Control'
    }, {
      id: 2,
      text: 'Residential Pest Control'
    }];

    $scope.service = [{
      id: 0,
      text: 'SERVICE'
    }, {
      id: 1,
      text: 'Cockroach Control Service'
    }, {
      id: 2,
      text: 'Termite Control Service'
    }, {
      id: 3,
      text: 'Bed Bugs Control Service'
    }, {
      id: 4,
      text: 'Lizard Control Service'
    }, {
      id: 5,
      text: 'Mosquito Control Service'
    }, {
      id: 6,
      text: 'Rodents Control Service'
    }, {
      id: 8,
      text: 'General Pest Management(Except Termite)'
    }];

    $scope.serviceType = [{
      id: 0,
      text: 'SERVICE TYPE'
    }, {
      id: 1,
      text: 'Single Service'
    }, {
      id: 2,
      text: '6 Months 2 Services'
    }, {
      id: 3,
      text: '1 Year 3 Services '
    }, {
      id: 4,
      text: '2 Years 6 Services'
    }, {
      id: 5,
      text: '3 Years 9 Services'
    }];

    $scope.squareFeet = [{
      id: 0,
      text: 'SQFT'
    }, {
      id: 1,
      text: '500 SFT'
    }, {
      id: 2,
      text: '800 SFT'
    }, {
      id: 3,
      text: '950 SFT'
    }, {
      id: 4,
      text: '1100 SFT'
    }, {
      id: 5,
      text: '1200 SFT'
    }, {
      id: 6,
      text: '1350 SFT'
    }, {
      id: 11,
      text: '1500 SFT'
    }, {
      id: 12,
      text: '1600 SFT'
    }, {
      id: 13,
      text: '1800 SFT'
    }, {
      id: 14,
      text: '1950 SFT'
    }, {
      id: 15,
      text: '2100 SFT'
    }, {
      id: 16,
      text: '2300 SFT'
    }, {
      id: 17,
      text: '2500 SFT'
    }, {
      id: 18,
      text: '3000 SFT'
    }];

    $scope.goToBookNow = function () {
      $state.go('app.bookNow', {});
    }

    $('#lightSlider').lightSlider({
      item: 3,
      slideMargin: 10,
      loop: true,
      slideMove: 1,
      speed: 100, //ms'
      auto: true
    });
  })

  .controller('batsCtrl', function ($scope) {
    $scope.batsData = [{
      header: 'Habitat',
      showContent: false,
      content: 'Ideal foraging sites for bats include open fields, marsh areas, and grasslands where they can freely hunt for insects. Bridges, caves, and rock crevices where the pests can hang from ceilings to rest during the daytime serve as the perfect roosting sites for communal species. Solitary bats may choose to roost in hollow trees or underneath overhanging ledges.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'Using echolocation, bats hunt flying insects at night. Some of their favourite meals include moths, beetles, mosquitoes, and ants. The animals hunt all night long, often eating 100 percent of their bodyweight over the course of a single evening.'
    }, {
      header: 'Life Cycle',
      showContent: false,
      content: 'Baby bats are born in the spring or early summer. They are cared for by their mothers and cling to the roofs of their roosts until they grow old enough to fly and hunt on their own. During winter, bats either find a warm place to hibernate or migrate to the warmer climates.'
    }, {
      header: 'Problems Caused by Bats',
      showContent: false,
      content: 'One of the most serious threats posed by bats is their droppings. The pests deposit their guano wherever they roost. If enough guano accumulates in places like attics, ceilings may sag and collapse. In addition to the structural damage it causes, bat droppings stain walls and cultivate the growth of Histoplasmosis. Bats have sharp teeth and are capable of biting when they feel threatened, which increases the risk of rabies.'
    }, {
      header: 'Signs of Infestation',
      showContent: false,
      content: 'Inside houses, bats can be heard rustling in attics or squeaking. Spotting their droppings on home exteriors also indicates the presence of bat infestations. Alternatively, homeowners can wait outside until dusk and watch for bats exiting attic roosts.'
    }, {
      header: 'Prevention',
      showContent: false,
      content: 'To prevent bats from taking up residence inside attics, homeowners should seal up all possible entrances such as open attic windows, gaps in siding, uncovered chimneys, and exposed vents. However, care should be taken not to seal bats inside.'
    }, {
      header: 'Trapping / Control / Removal',
      showContent: false,
      content: 'Attempting to handle bats can result in injury or illness. Inexperienced homeowners should never try to remove bats on their own. Instead, call the wildlife control experts at HPests Control Services. Our bat removal technicians can safely take care of bats in the attic, sanitize affected areas, and help seal the home against future bat infestations.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.batsData, function (batdata, batDataIndex) {
        if (batDataIndex != index) {
          batdata.showContent = false;
        } else if (batDataIndex == index)
          batdata.showContent = !batdata.showContent;
      });
    }
  })

  .controller('bedBugsCtrl', function ($scope) {
    $scope.bedBugsData = [{
      header: 'Identification',
      showContent: false,
      content: '<p>- Has seen a resurgence over the past years.</p><p> - Adults are approximately 4 to 5 mm long, size of an apple seed.</p><p> - Does not have wings; does not fly.</p><p> - Coloured reddish brown, with abdomen darker as blood is digested.</p><p> - Males exhibit a much more tapered abdomen than females.</p><p> - Reaction to bites vary from individual to individual, ranging from none to mild to severe</p>'
    }, {
      header: 'Habitat and Behaviour',
      showContent: false,
      content: '<p>- Prefers dark, undisturbed areas near host.</p> <p>- Hides in crevices in furniture and baseboards near beds.</p> - <p>Is attracted by carbon dioxide and warmth that humans emit.</p> <p>- A potential problem in dwellings with high turnover (e.g. hotels and motels).</p> <p> - Ability to move to different rooms in multi-unit buildings.</p><p> - Often brought in on luggage or used furniture.</p> <br>Bedbugs are small, nocturnal, wingless insects belonging to the insect family of Cimicidae.  They feed on humans and other warm blooded animals. They are an oval shape and are up to 4-5 mm long when fully grown. Adult bed bugs have a flattened body and their skin colour is either rust brown or a deeper red brown. Nymph bed bugs are clear or a yellowish colour and are generally 1-4mm long. Bed bugs have two antennae and six legs. Red more on what a bed bug looks like. <br><br>Bed bugs have been known to travel over 20 feet from hiding in order to feed but will generally hide within 3-6 feet of their host. <br><br> Due to the flattened body of a bed bug they can easily hide in small places such as baseboards, cracks in floors, under carpets, behind loose wallpaper, bed frames, sofas, behind picture frames and many other places which makes them very difficult to detect. They tend to stay together and large infestations will give off a sweet but unpleasant smell.'
    }, {
      header: 'Life Cycle',
      showContent: false,
      content: '<p>- Undergoes gradual metamorphosis (egg, nymph, adult).</p><p>- Nymphs are smaller versions of the adults and will go through several molts until fully grown.</p><p>- Female lays 200 to 500 eggs in her lifetime, 10 to 50 at a time, on rough surfaces.</p><p>- Eggs hatch in 6 to 17 days.</p><p> - Adults can survive over 1 year without feeding.</p>'
    }, {
      header: 'How Do You Get Bed Bugs?',
      showContent: false,
      content: 'Bed bugs do not cling to people but they can accidentally get caught up in our belongings (i.e. suitcase, purse, laptop bags). From there they can move from their current home into new ones in homes, hotels, offices, hospitals, or any other building as well as modes of transportation. Sanitation and cleanliness of a property is not an issue as bed bugs are notorious hitch hikers and can show up almost anywhere.'
    }, {
      header: 'Bed Bugs are not a Sanitation issue.',
      showContent: false,
      content: 'Even the cleanest of places can fall victim to bed bugs and once inside they spread rapidly. Bed bugs are great hitch hikers and easily travel from place to place in someone?s personal belongings or luggage.'
    }, {
      header: 'Where have you been finding the bed bugs?',
      showContent: false,
      content: 'Bed bugs are not limited to any one particular kind of dwelling. They have been found in houses, multi-family dwellings, apartments, hotels, airplanes and hospitals. Sanitation or cleanliness is not an issue in where you can find bed bugs.'
    }, {
      header: 'Why are bed bugs back?',
      showContent: false,
      content: 'Bed bugs never really left. They are common in many nations around the world. We are seeing a resurgence in North America for several reasons including a reduced use of pesticides, the use of second hand furniture and increased international travel as bed bugs are notorious hitch hikers.'
    }, {
      header: 'How Do You Get Bed Bugs?',
      showContent: false,
      content: '<b>Once established, bed bugs tend to stay, but can spread due to any of the following;</b><p>- Being disturbed (i.e. disassembling furniture or incorrect pesticide application).</p><p>- A food shortage (i.e. no host) may cause them to migrate to neighbouring rooms.</p><p>- A shortage of harbourage spaces may cause them to migrate to neighbouring rooms.</p><p>- Infested furniture moved down a hall, or passed on to others.</p><p>- Vacuum cleaners used for multiple rooms.</p><p>- Commercial laundry machines.</p>'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.bedBugsData, function (bedBugdata, bedBugIndex) {
        if (bedBugIndex != index) {
          bedBugdata.showContent = false;
        } else if (bedBugIndex == index)
          bedBugdata.showContent = !bedBugdata.showContent;
      });
    }
  })

  .controller('boxElderBugsCtrl', function ($scope) {
    $scope.boxElderBugsData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'The bodies of box elder bugs are black in color and are marked by red lines along the thorax and sides. Their wings are flat and red. Box elder bugs measure between 11 to 14 mm long.'
    }, {
      header: 'Behavior, Diet & Habits',
      showContent: false,
      content: 'Box elder bugs do not nest indoors year-round. Rather, they make their homes in box elder, maple and ash trees during warmer seasons and migrate into buildings and homes to find shelter for the winter.They enter through small cracks and crevices within the building, and remain inside, hibernating, through fall and winter. They emerge when heat sources within the building are high and can be located in the warmest areas of a structure�s walls. While they do not cause damage to buildings, their droppings are unsightly and leave stains on furniture and linens.<br><br>Adult bugs live and breed on the leaves of box elder trees, laying their eggs in spring. They feed on soft parts of box elder trees, including leaves, flowers and new twigs. They also extract juices, causing minimal to substantial damage to their host tree. Find out more about box elder bug behavior and whether they bite.'
    }, {
      header: 'Reproduction',
      showContent: false,
      content: 'The eggs of box elder bugs are reddish brown in color, allowing them to stay well hidden in the bark of the host tree. After a few days, the eggs hatch into red and gray nymphs, which eventually mature and begin the breeding process again. Mature box elder bugs can be found gathering in large numbers on branches and boughs. Concentrations will be heaviest in areas receiving sufficient sunlight. Read more details about the box elder bug life cycle.'
    }, {
      header: 'Signs of a Box Elder Bug Infestation',
      showContent: false,
      content: 'Like many overwintering pests, the most startling sign is the bugs when they invade in staggering numbers. They usually appear on sunny sides of buildings in the fall. They invade the voids of the building to overwinter. While overwintering, they do not feed or reproduce. Find out more about box elder bug infestations.'
    }, {
      header: 'Prevention',
      showContent: false,
      content: 'To stop box elder bugs from multiplying, it is often helpful to remove their host trees from the area surrounding your home, but the adults can still fly from locations off the property. If you choose to plant box elder trees in your yard, choose male trees: (non-seed-bearing) since female box elder trees are more susceptible to infestation. However, box elder trees are not recommended for ornamental planting. These insects can also enter through windows and doors; ensure that these close properly and utilize screen doors to keep box elder bugs from entering. Read more details about box elder bugs in the house.'
    }, {
      header: 'How HPests treats for box elder bugs',
      showContent: false,
      content: '<p>- Repairing damaged windows and door screens.</p><p>- Installing door sweeps on exterior doors.- Installing or repairing screens in roof and soffit vents.</p><p>- Sealing holes or gaps around places where cables, wires or plumbing enters the building.</p><p>- Plugging gaps at doors, windowsills, roof joints, and fascia boards. Checking for and sealing gaps and cracks where different building materials meet. For example, where siding meets the brick exterior or foundation.</p>'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.boxElderBugsData, function (boxElderBugData, boxElderBugIndex) {
        if (boxElderBugIndex != index) {
          boxElderBugData.showContent = false;
        } else if (boxElderBugIndex == index)
          boxElderBugData.showContent = !boxElderBugData.showContent;
      });
    }
  })

  .controller('fruitFliesCtrl', function ($scope) {
    $scope.fruitFliesData = [{
      header: 'Identification',
      showContent: false,
      content: '- Coloured tan/yellow to light brown, with bright red eyes.- Approximately 2.5 to 4 millimeters.- Three segments in the antennae, third segment appears to be a feathery bristle'
    }, {
      header: 'What Attracts Fruit Flies',
      showContent: false,
      content: 'Fruits flies enter homes to seek out food and breeding sources. Fruits flies are generally attracted by fermenting fruits, vegetables or moist decaying organic matter. Such fermentations or decays are caused by yeast or other fungi. The larvae feed on the yeast and other micro-organisms in the fermenting materials. The presence of readily available fruits and vegetables in homes, food processing and handling facilities makes these structures primary target of fruit flies. Adult fruit flies do not necessarily eat the fruit, but instead the fermenting material provides the larvae with a ready-made food source.'
    }, {
      header: 'Problems/Damage',
      showContent: false,
      content: 'Fruit flies are a major concern to everyone concerned about the safety of food supply: storage, and manufacturing, agriculture, restaurants and food service industries, and their customers. Fruit flies cause a high percentage of insect contamination of fruit and fruit products by depositing bacteria and other disease causing organisms.<br><br>Fruit flies have sponging mouthparts, similar to houseflies. That means in order for a fruit fly to enjoy a meal it must deposit its saliva onto food and then suck up the solution. The process inevitably leaves behind bacteria that were once inside the fly as well as on their legs and bodies.'
    }, {
      header: 'Habitat and Behaviour',
      showContent: false,
      content: 'Fruit flies are found all around the world and almost everywhere one can find exposed food. Restaurants, hotels, cafeterias, farmer�s markets, trash receptacles, recycling areas, dumpsters, beverage stations, and janitorial closets are some of their favourite areas.<br><br>For many years, fruit flies were thought to spontaneously generate on ripe and rotting produce, but that myth has been disproven. In most cases, fruit flies have either found their way inside the home by following the odours of ripe fruit or have been transported there along with the produce. This not only underlines the importance of washing the fruits and vegetables that are brought into the home, but also means that you should not keep excess quantities of produce exposed.<br><br>Females lay approximately 400 eggs, about five at a time, into rotting fruit or other suitable materials. The eggs, which are about 0.5 millimeters long, hatch after 12-15 hours. The larvae grow for about 4 days, during which time they consume the yeast and microorganisms which decompose the fruit as well as the sugar of the fruit itself.'
    }, {
      header: 'Life Cycle',
      showContent: false,
      content: 'Fruit flies are known for their rapid reproduction and relatively short lifespans. The average lifespan of a fruit fly is about 40 to 50 days. The fruit fly life cycle is made up of four stages: egg, larva, pupa, and adult. Most of the fly�s life is spent as an adult, with development usually taking less than two weeks. Developmental time and overall lifespan is largely influenced by environmental conditions such as temperature and humidity. High temperatures quicken development and may extend lifespans, whereas cooler temperatures may prolongs larval and pupal development and kill off adults.<br><br>The fruit fly life cycle begins when a female fruit fly lays a batch of eggs, which usually consists of around 500 eggs. Under the right conditions, a fruit fly egg only takes about a day to hatch. The newly hatched larvae then develop through three instars stages, with the entire process lasting about five days. A larva then encloses itself in a hard case for the pupal stage, which takes about five days. After emerging from the pupal case, the fruit fly reaches adulthood. Females may begin procreating within within two days.'
    }, {
      header: 'Infestations',
      showContent: false,
      content: 'The most visible sign of fruit fly infestation is the presence of the adults. Usually seen swarming around fruits and vegetables left out on kitchen or commercial countertops or in and around refuse bins and other receptacles in which foods are disposed, fruit flies congregate en masse and feed on the decaying materials until food sources shore up (?). Fruit flies typically remain in areas with suitable food sources. Diners, bars, cafes, and restaurants often need to take special precautions to limit fruit fly infestations. Stowing raw, whole foods in refrigerated or vacuum-sealed units also helps to prevent fruit fly infestations.'
    }, {
      header: 'Tips for prevention and control',
      showContent: false,
      content: '<b>These tips may help you get rid of fruit flies in your home:</b><p>- Reduce the presence of ripe fruits and vegetables; place them in a refrigerator or a paper bag.</p><p>- Close the lids on all garbage and waste containers.</p><p>- Clean up and spills and inspect the environment for potential breeding areas; dirty sponges and washcloths, drains, broken tiles, and standing water.</p><p>- Degrease and clean drains and sink areas.</p>'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.fruitFliesData, function (fruitFlyData, fruitFlyIndex) {
        if (fruitFlyIndex != index) {
          fruitFlyData.showContent = false;
        } else if (fruitFlyIndex == index)
          fruitFlyData.showContent = !fruitFlyData.showContent;
      });
    }
  })

  .controller('fliesCtrl', function ($scope) {
    $scope.fliesData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'A typical adult fly has three body parts: head, thorax and abdomen. The colour and body size varies depending on species; most are small in size, typically measuring no more than 10 millimetres long. The head has a pair of compound eyes, a pair of antennae, and variously modified mouthparts. The thorax is the locomotor center; it bears a pair of functional membranous wings used in flight and three pairs of functional legs. The immature forms, called larvae, are tiny, cream-whitish, legless, and often worm-like.'
    }, {
      header: 'General Facts',
      showContent: false,
      content: 'Because of their sheer abundance and varied habitats, flies frequently come in contact with humans and some have the ability to transmit disease-causing germs. More than 100 pathogens are associated with the house fly including: Salmonella, Staphylococcus, E. coli and Shigella. These pathogens can cause disease in humans and animals, including: typhoid fever, cholera, bacillary dysentery, hepatitis, ophthalmia, polio, tuberculosis and infantile diarrhea. Sanitation is critical to controlling these pests, but accurate identification is essential for successful fly control. Some of the most common fly species of concern in In india include blow flies, cluster flies, drain flies, fruit flies, and house flies.<br><b>Here are some other facts you should know about flies and fly control:</b><p>- Depending on the species, the life expectancy of a fly is eight days to two months, or in some cases, up to a year.</p><p>- Flies belong to the Order Diptera, meaning two wings. There are 16,000 species of flies in North America.</p><p>- Flies plague every part of the world except the polar ice caps.</p><p>- One pair of flies can produce more than 1 million offspring in as little as six to eight weeks.</p><p>- As many as 33 million microorganisms may flourish in a single fly’s gut, while a half-billion more swarm over its body and legs.</p><p>- Flies spread diseases readily because they move quickly from rotting, disease-laden garbage to exposed exposed human foods and utensils.</p><p>- Because they only have two wings, flies land often and therefore can deposit thousands of bacteria each time they land.</p><p>- For every fly seen, there are an estimated 19 more hidden from view. This means humans don’t even see most of the flies present at an infestation.</p>'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Flies generally live within close proximity to suitable food sources and breeding grounds. They feed on various food substances; however, most of the flies found in and around buildings feed and breed in warm, moist decaying organic matter. Small flies such as drain flies, fungus gnats, and phorid flies are commonly found in and around drains, leakages in slab floors, shower pans, sinks, and overwatered potted plant soils. Fruit flies tend to breed in decaying fruits and vegetables. Meanwhile, filthy flies such as house flies, dung flies, blow flies, bottle flies, and flesh flies visit and breed in garbage, trash bins, piles of compost or manure, and the carcasses of animals. Flies are attracted to light, so they often gather around windows when inhabiting indoor areas. Some fly species such as blow and bottle flies are known to fly long distances of up 20 miles in search of food and breeding sites.'
    }, {
      header: 'Life Cycle',
      showContent: false,
      content: 'Flies undergo complete metamorphosis consisting of egg, larva, pupa and adult stages. Sexual mature female flies lay eggs on suitable material; the number of eggs laid depends on the fly species. The eggs hatch into tiny, whitish, legless larvae also known as maggots that resemble tiny worms. After completing the larval stage of development, the larvae become pupae from which the adults develop. The development time from egg to adulthood depends on the temperature of the surrounding environment. Colder temperatures prolong the life cycle, while warmer temperatures shorten it. In general, flies complete the life cycle within a few weeks and live an additional few weeks or months as adults.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.fliesData, function (flyData, flyIndex) {
        if (flyIndex != index) {
          flyData.showContent = false;
        } else if (flyIndex == index)
          flyData.showContent = !flyData.showContent;
      });
    }
  })

  .controller('millipedesCtrl', function ($scope) {
    $scope.millipedesData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'Millipedes have hard, cord-like bodies made up of multiple segments; each segment has a pair of legs. Because of their many pairs of closely arranged legs, millipedes tend to move slowly, with their legs pushing in a wave-like pattern. When alarmed, millipedes coil up in a tight spiral shape. Size varies greatly by species, with the smallest millipedes measuring about 2 cm in length. Most millipedes are entirely black, though some species may appear dark brown or reddish. They have short but visible antennae made up of 7 segments.<br><br>Often confused with centipedes, millipedes have two pair of legs on each body segment, whereas centipedes have one pair per segment. Millipedes are also more rounded in shape. Additionally the millipede travels much slower than the rapid-moving centipede.'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Millipedes are ground-dwelling arthropods that live outdoors and thrive in dark habitats with plenty of moisture. Known to feed on decaying plant matter, millipedes often reside directly within sources of food, like piles of leaf litter or rotting logs. The arthropods also commonly burrow in areas where soil stays moist, like under rocks or piles of mulch.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'Mostly detritivorous, millipedes feed on decomposing organic matter, such as leaf litter and dead wood. Millipedes play an important role in the natural cycles by helping to break down plant matter after it has undergone microbial decomposition. In the absence of decaying material, millipedes may feed on the delicate roots of seedlings or ripening fruit lying on the ground.'
    }, {
      header: 'Problems Caused by Millipedes',
      showContent: false,
      content: 'As minor garden pests, millipedes living outdoors may damage sprouting seeds, seedlings, and ripening fruit. While not destructive inside the home, millipedes create a minor nuisance by being an unwelcome sight. Although the arthropods die shortly after coming inside, their hard exoskeletons remain intact for a while after. Handling certain millipedes may result in irritation of the skin known as millipede burn. An effect of the toxic chemicals millipedes secrete when alarmed, millipede burn symptoms include brown staining of the skin, blistering, and itching or burning of the skin.'
    }, {
      header: 'Detection /Signs of Infestation',
      showContent: false,
      content: 'Millipedes sometimes take residence in the basements of homes. Needing ample moisture for survival, the arthropods usually die of dehydration a day or two after entering. Homeowners typically notice infestations by finding the hard, shell-like remnants of dead millipedes..'
    }, {
      header: 'Prevention Tips',
      showContent: false,
      content: 'Homeowners rarely need to take significant control measures against millipedes, as invasions tend to comprise only a handful of the creatures. To deter millipedes from entering the house, homeowners should keep the residence clean and free of clutter, especially in basement areas. Eliminating potential hiding places also discourages millipedes from taking up residence in the home. Reducing the amount of moisture in the basement makes the home less attractive to the pests, as well. Seal exterior cracks and crevices around the home to prevent millipedes and other pests from entering, and contact H Pest control professional when the levels of infestations become too high or overwhelming to handle alone.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.millipedesData, function (millipedeData, millipedeIndex) {
        if (millipedeIndex != index) {
          millipedeData.showContent = false;
        } else if (millipedeIndex == index)
          millipedeData.showContent = !millipedeData.showContent;
      });
    }
  })

  .controller('snakesCtrl', function ($scope) {
    $scope.snakesData = [{
      header: 'Types of Snakes in Canada',
      showContent: false,
      content: '<b>Some of the most common species of Canadian snakes include</b><p>- Common (Eastern) Garter Snake.</p><p>- Copperhead Snake.</p><p>- Cottonmouth Snake.</p><p>- Giant Garter Snake.</p><p>- Glossy Snake.</p><p>- Rough Earth Snake.</p><p>- Rubber Boa Snake.</p><p>- Scarlet Snake.</p><p>- Sidewinder Snake.</p><p>- Timber Rattlesnake.</p><p>- Trans-Pecos Rat Snake.</p><p>- Western Terrestrial Garter Snake.</p><p>- Western Worm Snake.</p>'
    }, {
      header: 'Appearance / Identification',
      showContent: false,
      content: 'The fact that snakes have no arms or legs gives them a unique appearance. While colouration and markings vary from species to species, all snakes share features such as scaly bodies, lidless eyes, and the ability to dislocate their jaws in order to swallow large prey. They navigate their environments by constantly flicking out their tongues to taste the air, and some species can even sense the infrared heat of their prey with special sensory organs in their heads.'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Snakes can be found throughout India and are most prevalent in the southern regions of the country where temperatures are more moderate. They live in forests, prairies, deserts, marshes, and near freshwater lakes and ponds. Most snakes live in underground burrows, but certain species live in trees or lead semi-aquatic live.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'Small animals like rodents, fish, frogs, and insects are the preferred prey of most sakes. Many snakes swallow their prey alive, but some species rely on venom to paralyze and kill their food. Others constrict their prey, squeezing the life out of their victims before devouring them whole. The reptiles can unhinge their jaws to swallow their food, which is then digested over a long period of time.'
    }, {
      header: 'Life Cycle',
      showContent: false,
      content: 'Snakes mate in the springtime when they wake up from hibernation. Many Indian snakes can give birth to up to 25 offspring. As the pests shed their skin to grow, young snakes go through several moults during their first year of life. Relatively long-lived, snakes may grow to be as old as 50 years in captivity, though they generally live much shorter lives in the wild.'
    }, {
      header: 'Problems Caused by Snakes',
      showContent: false,
      content: 'Snakes do not cause property damage, but they can attack and bite humans and pets when provoked, which can cause extreme pain and even death. Young children playing outside in the summertime are generally at highest risk of a snakebite. Although venomous snakes are rare in Canada, even a non-venomous snake bite can become infected and lead to illness.'
    }, {
      header: 'Trapping / Control / Removal',
      showContent: false,
      content: 'The best solution to snake problems is to contact a wildlife control agency. The wildlife and pest removal experts at HPests are trained to identify species of troublesome snakes and then eradicate them. Our removal technicians also help safeguard homes from additional snakes and address the underlying causes bringing them there in the first place.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.snakesData, function (snakeData, snakeIndex) {
        if (snakeIndex != index) {
          snakeData.showContent = false;
        } else if (snakeIndex == index)
          snakeData.showContent = !snakeData.showContent;
      });
    }
  })

  .controller('fleasCtrl', function ($scope) {
    $scope.fleasData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'Fleas are very small, wingless insects, about 2.5 mm long, dark brown in colour, and visible to the naked eye. The body appears flattened on the sides, giving it a thin appearance. The hind legs are bigger and well adapted for jumping. Fleas are wingless but remain capable of jumping moderate distances by using their long hind legs. They can jump as high as 15 cm vertically and as far as 40 cm horizontally. Flea larvae are whitish, about three to six millimetres long, and have protruding hair encircling each body segment.<br><br><b>Characteristics:</b><p>- Measure about 1.5 mm in length, depending on species.</p><p>- Are laterally flattened (i.e. flat at the sides).</p><p>- Are wingless; cannot fly.</p><p>- Normally are brownish-black in colour; however, after feeding they will take on a reddish hue.</p><p>- Have long and powerful hind legs that are adapted for jumping; can jump up to 20 cm vertically and about 40 cm horizontally.</p><p>- Have short, 3-segmented antennae.</p><p>- Mouthparts adapted for piercing and sucking.</p>'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Fleas can be found throughout the world. As part of the flea life cycle includes laying eggs on a warm-blooded animal, they commonly live in areas densely populated by potential hosts. The presence of high humidity and temperatures assists the development of larvae. The pests are sometimes forced inside homes due to prolonged periods of excessively wet weather. Fleas can gain entry into homes by attaching themselves to common household pets. Once inside, the parasites tend to gravitate toward places frequented by potential host animals. Pet beds, as well as cracks and crevices, make popular harbourage sites for fleas.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'Adult fleas rely on warm-blooded hosts for nourishment. The frequency and duration of feeding varies from species to species. The flea’s mouthpart is modified to pierce a host’s skin and suck up blood. Flea bites often cause irritation and, in extreme cases, can lead to secondary infections. The larvae feed on hair, skin particles, and adult flea feces.'
    }, {
      header: 'Life Cycle / Reproduction',
      showContent: false,
      content: 'Fleas undergo complete metamorphosis with four distinct stages: egg, larva, pupa, and adult. Once the adult stage is reached, fleas can live up to about a year, although 30 to 90 days represents the typical lifespan. Adult females lay eggs on the host animal after consuming a blood meal. In the right conditions, eggs hatch within 2 to 12 days. Newly hatched fleas spend as many as 200 days in the larval stage before pupating. Generally, the pupal stage lasts between 5 and 14 days. In the absence of a potential host, the pupae can lay dormant until a host shows up before emerging from the pupal stage to adulthood.'
    }, {
      header: 'Problems Caused by Fleas',
      showContent: false,
      content: 'Fleas can wreak havoc on people and household pets. A severe untreated infestation can kill a cat or dog, but not before the animal undergoes serious suffering. Other medical conditions caused by fleas include bartonellosis (cat scratch fever), feline anemia, and flea allergies.<br><br>If a preferred host is unreachable, adult fleas often jump to the first warm-blooded animal that it finds. Most notably, fleas are historically known as carriers of the plague. Fleas are also intermediate hosts of dog and rodent tapeworms; they can transmit the worms to humans and pets.'
    }, {
      header: 'Detection /Signs of Infestation',
      showContent: false,
      content: 'Flea detection can be difficult in early stages of infestation. If pets are present, cats or dogs may be seen scratching or biting their fur. Additional signs of flea infestation include the red bite marks and resulting rashes the parasites leave behind. If the infestation is large enough, fleas can be seen jumping on and off of host animals or lingering in areas frequented by potential hosts.'
    }, {
      header: 'Prevention Tips',
      showContent: false,
      content: 'One of the best ways to prevent a flea infestation is to generally maintain a clean household by steam-cleaning the carpets. The cleaning method works due to the fact that fleas spend up to 90 percent of time away from hosts in furniture or carpeting. Steam cleaning effectively kills fleas in all developmental stages. A comprehensive cleaning will also eliminate any risk of flea infestation in buildings where the parasites might not be apparent due to their ability to go without food for months at a time.<br><br>Owners of cats or dogs should thoroughly and regularly inspect pets for fleas. A pest control professional should be contacted to perform such treatments. Regardless, an appropriate, off-the-shelf product can be used for treatment based on label instructions. In addition to targeting fleas directly, look for and remove the nests of wild animals on the property. The removal of unwelcome nests inhibits the rise of flea populations and allows pets to roam freely. For assistance in properly handling and removing a flea infestation, contact Hpests control Services specialist.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.fleasData, function (fleaData, fleaIndex) {
        if (fleaIndex != index) {
          fleaData.showContent = false;
        } else if (fleaIndex == index)
          fleaData.showContent = !fleaData.showContent;
      });
    }
  })

  .controller('mitesCtrl', function ($scope) {
    $scope.mitesData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'Similar in appearance to ticks but much smaller, mites have bulbous, round, or pill-shaped bodies. Classified as arachnids, mites have eight jointed legs. Their size varies by species, but most mites are usually invisible to the naked eye. The largest mites measure about 6 mm long, while the smallest are about 0.1 mm. The color of mites varies greatly as well; most mites appear tan, brown, or reddish-brown, but some species are bright red, blue, or green in color.'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Mites are ubiquitous and live in nearly every habitat, including deep soil and aquatic environments. As parasites of birds, mammals, and flying insects, mites may spread wherever host animals travel. These arachnids live either in the host’s environment, such as a bird’s nest, or on the host itself. Some species such as scabies and chigger mites can bury themselves under human skin and tissue. Mites that commonly affect humans often live in carpets, furniture, and mattresses.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'Mites thrive by forming parasitic relationships with other organisms. Specific diets vary by species. Mites that are troublesome to humans feed on blood for sustenance. Most biting mites actually prefer to feed on other animals and resort to biting humans when alternative options are scarce. Common household mites, like dust mites, feed on flakes of dead skin from humans and pets.'
    }, {
      header: 'Life Cycle / Reproduction',
      showContent: false,
      content: 'The mite lifecycle consists of four stages: egg, larva, nymph, and adult. Eggs hatch into six-legged larvae, which molt several times before entering the eight-legged nymphal stage. As nymphs, mites molt an additional one to three times before maturing into full grown eight-legged adults. Development from an egg to an adult usually takes several weeks; however, under ideal conditions development time can shorten to just a few days. After reaching adulthood, mites may live for several months.'
    }, {
      header: 'Problems Caused by Mites',
      showContent: false,
      content: 'Some mites bite humans. Bites usually occur around the ankles, armpits, and areas where clothing rubs tightly against the skin. Depending on species, mite bites may be painful or go unnoticed. Nearly all bites result in itchy red marks or rashes. Intense itching may occur, and scratching may lead to infection. Symptoms usually develop within a day and may last as long as a week. Scabies mites may cause persistent, intensely itchy rashes because the pests burrow into the skin to breed and then emerge to feed on flesh. Bites from chiggers and scabies mites can transmit diseases to humans and livestock.<br><br>Mites can also be nuisances without biting. People with dust allergies are usually allergic to dust mites, which live in carpets and furniture. Mite carcasses and feces can become airborne and be inhaled, which can cause individuals with dust allergies to experience stuffy noses, watery eyes, and sneezing. Additionally, herbivorous mites, such as spider and eriophyid mites, can harm crops and may cause substantial economic losses involving grains and other organic products.'
    }, {
      header: 'Detection /Signs of Infestation',
      showContent: false,
      content: 'As most mites are invisible to the naked eye, infestations can be difficult to detect until the pests become problematic. Usually, homeowners start to notice mite infestations if allergies feel worse after waking up or if small red welts or rashes appear on the skin. However, it is important to note that allergy reactions and welts may not necessarily be caused by mites. Pets that excessively itch may have mites. Red bumps and sores from biting or scratching the affected area can further indicate the presence of mites on pets. Adult mites are often visible when moving on the surface of infested product and plants.'
    }, {
      header: 'Prevention Tips',
      showContent: false,
      content: 'Mow your lawn and remove weeds regularly to prevent bringing outdoor mites into the home. Also, keep leaf litter a fair distance from the house. Keeping pets clean also helps reduce the occurrence of mites. If performing outdoor activities in wooded areas, such as hiking, trail biking, or sightseeing, wear clothing that covers most of your skin.<br><br>To prevent the occurrence of mites that thrive indoors, clean the house regularly. This includes dusting surfaces and vacuuming carpets. Give extra attention to the bedrooms, as dust mites commonly live on or near mattresses. Wash linens and sheets in hot water every two weeks, and try to keep the humidity level below 50% in the bedroom. Individuals with particularly severe allergies to dust mites may want to consider purchasing antimicrobial mattresses, mattress encasements, and pillow covers.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.mitesData, function (miteData, miteIndex) {
        if (miteIndex != index) {
          miteData.showContent = false;
        } else if (miteIndex == index)
          miteData.showContent = !miteData.showContent;
      });
    }
  })

  .controller('stinkBugsCtrl', function ($scope) {
    $scope.stinkBugsData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'Adult stink bugs have a carapace which is shaped like a shield. Most species range in size from 14 to 19 mm in length and are usually about as wide as they are long. As indicated by their name, brown marmorated stink bugs tend to be different shades of brown in colour, with lighter bands on the antennae and darker bands on the body. BMSBs also have distinguishing patches of small, rounded, coppery-blue depressions along the head and pronotum. Green stink bugs, on the other hand, appear bright green in colour with a border of narrow, orange-yellow lines, while brown stink bugs are brownish-yellow.'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Although stink bugs live throughout the cooler parts of the India, they thrive in temperatures of 21º C or above. Stink bugs are active during spring and summer, and migrate into homes and buildings around September and October to overwinter. The insects often seek shelter in tree bark, weeds, and similar outdoor environments during the warmer months.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'Stink bugs are plant feeders; they feed on a broad variety of fruits, vegetables, plants, and trees. The typical stink bug diet includes legumes, peppers, tomatoes, corn, snap beans, apples, peaches, figs, mulberries, oranges, grapefruits, lemons, persimmons, berries, grapes, soybeans, elm trees, and oaks.'
    }, {
      header: 'Life Cycle / Reproduction',
      showContent: false,
      content: 'Developing by way of gradual metamorphosis, stink bugs hatch from eggs and subsist as nymphs before reaching adulthood. Adult females lay as many as several hundred eggs apiece in mid to late June, usually on the stems or leaves of plants in clusters of about 36. Once the nymphs hatch, they go through five molts before becoming mature adults. The development process takes approximately five weeks, and adults live for an average of eight months. Depending on the temperature and other environmental factors, the pests can produce up to four generations a year.'
    }, {
      header: 'Problems Caused by Stink Bugs',
      showContent: false,
      content: 'Stink bugs cause significant problems due to the wide variety of crops and produce which the pests consume. The feeding habits of stink bugs make the affected products unmarketable by creating an undesirable discolouration and distortion known as cat facing. Additionally, some people are sensitive to the odour that stink bugs emit and may experience allergic reactions like rhinitis or conjunctivitis.'
    }, {
      header: 'Detection /Signs of Infestation',
      showContent: false,
      content: 'Prior to moving indoors during September and early October, stink bugs frequently congregate on exterior walls that receive ample sunshine. Adult stink bugs are also commonly spotted around light fixtures, on draperies, or crawling along walls. One of the most telling signs of an overwintering stink bug infestation occurs on warmer winter days, when the pests emerge from their hiding places in the home to congregate on indoor walls.'
    }, {
      header: 'Prevention Tips',
      showContent: false,
      content: 'The best way to prevent a stink bug infestation is to eliminate access to the home. In order to do this, cracks in the foundation should be sealed with caulk or a similar substance, and damaged screens should be replaced in windows and doors. Homeowners should also check siding, utility pipes and chimneys for cracks and seal off the openings appropriately. Additionally, trimming down outdoor vegetation may discourage stink bugs from inhabiting yards and consequently moving into homes.'
    }, {
      header: 'Control / Removal',
      showContent: false,
      content: 'Removing a stink bug infestation from the home can be accomplished with a vacuum cleaner. Crushing the bugs releases their unpleasant odour, but vacuum cleaners eliminate the potency of the smell. Locating and sealing the point of entry is also an important component of stink bug removal. For particularly serious infestations, call a Hpests management professional who will use appropriate tactics to control the infestation.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.stinkBugsData, function (stinkBugData, stinkBugIndex) {
        if (stinkBugIndex != index) {
          stinkBugData.showContent = false;
        } else if (stinkBugIndex == index)
          stinkBugData.showContent = !stinkBugData.showContent;
      });
    }
  })

  .controller('mosquitoesCtrl', function ($scope) {
    $scope.mosquitoesData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'Adult mosquitoes like other insects have three body parts: head, thorax, and abdomen. Three pairs of long legs, a pair of membranous, scaled wings, and halteres are attached to the thorax. The shape, pattern, and colour of the wing scales vary depending on species; in some species, the wings are brilliantly coloured and patterned. The body is typically slender with long legs, ranging in size from 4 to 10 mm in length. The head has a beak used for feeding, which in females is modified into a needle-like structure called a stylet used to pierce and suck blood from hosts. Male mosquitoes have long, feathery antennae, while female antennae are slightly hairy.'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Mosquitoes typically breed in still water, as running water such as streams wash out eggs, larvae, and pupae. Examples of ideal habitats include storm sewers, flooded areas, tree holes, old tires, bird baths, flower pots, and anywhere water may accumulate for more than three days. Adults rest in tall, shady vegetation near a water source or in other protective resting areas whenever not in search of hosts to feed on. Mosquitoes tend to be more active under sufficient cloud cover or in shady areas compared to locations in direct sunlight.'
    }, {
      header: 'Diet',
      showContent: false,
      content: '<b>What do mosquitoes eat?</b><p>Both sexes of all mosquito species feed on sugar sources, which include plant nectar, honeydew, fruit juice, and other plant secretions. However, the females also need blood for egg production; therefore, it is only the females that bite and feed on blood. Mosquitoes are less specific in their host preference. Host preference depends on the mosquito species, availability of host, and the environment; it ranges from mammals and birds to reptiles and amphibians. Most species in the arctic feed on warm-blooded animals. Larvae feed on various dead and living micro-organisms in the aquatic environments they live in, including algae, bacteria, fungi, and even flotsam.</p><br><b>Predators: What Eats Mosquitoes?</b><p>While little scientific proof exists to confirm that predatory fish, birds, and bats provide effective mosquito control, these predators are known to consume adult mosquitoes and larvae in varying amounts depending on availability and dieting preferences. The Western mosquitofish, or Gambusia affinis, ingests considerable amount of mosquito larvae; however, the fish is found mostly in warmer climates and occurs only in Ontario and Alberta in small numbers. While purple martins and bats are mostly opportunistic feeders of mosquitoes, mosquitoes remain a small percentage of their diets. Relying on bats to provide noteworthy mosquito control may prove futile. Because bats are opportunistic feeders, mosquitoes are not their primary food source. The flying mammals feed on other things, too.</p>'
    }, {
      header: 'Life Cycle / Reproduction',
      showContent: false,
      content: '<b>Eggs</b><p>Mosquitoes undergo complete metamorphosis with four distinct stages: eggs, larvae, pupae, and adults. The larva is the second developmental stage. Mosquitoes lay eggs either singly or in multiples, called egg rafts, either directly in the water or near a source of water. Eggs hatch in one of two cycles: direct-hatching or delayed-hatching. Direct-hatching eggs are laid directly on top of shallow standing water, and the eggs hatch in a matter of two to three days. Delayed-hatching eggs are laid on moist substrates, and they go through a necessary dry period of several days or weeks and then hatch once submerged by water.</p><br><b>Larva</b><p>Eggs are laid either singly or in clusters on the surface of stagnant water. The eggs hatch into tiny worm-like larvae also known as wrigglers, because they move by wriggling in the water. The larvae go through four instars before becoming pupae, and this stage lasts on average for seven days. Mosquito larvae can grow up to 15 mm long and feed on a diet of algae and other organic matter in the water. Unlike adult mosquitoes, larvae are exclusively aquatic and have the ability to live in any space capable of retaining water for several days. In addition to ponds and flooded areas, rain barrels and bird baths make ideal habitats for mosquito larvae.</p>'
    }, {
      header: 'Problems Caused by Mosquitoes',
      showContent: false,
      content: 'Most mosquitoes found in India are more of a nuisance than vectors of disease, though a few species are known vectors. The constant buzzing and flying around can be annoying, and they can inflict very painful, irritating, and distracting bites, which can disrupt outdoor activities. The biting and nagging can also cause misery to livestock with some economic implications. As natural vectors of certain pathogens, mosquitoes transmit pathogens and parasites that cause certain diseases. Some of the most common known pathogens include plasmodium that causes malaria, West Nile virus, encephalitis viruses complex, and filarial heartworm in dogs.'
    }, {
      header: 'Signs of Infestation',
      showContent: false,
      content: 'The most common signs of mosquito infestation is the buzzing sound the female mosquito makes in flight, followed by bites, and also by seeing adults resting on walls, vegetation, or similar resting sites during daytime. Another common sign is the presence of the larvae – wrigglers in stagnant water, which often seem attached to vegetation or objects in the water. When disturbed, they dive under the water. Together with the wrigglers are the “comma-shaped pupae,” the tumblers. The presence of these immature stages show active breeding.  '
    }, {
      header: 'Mosquito Prevention',
      showContent: false,
      content: 'The most common way to prevent mosquito infestations is to eliminate breeding sites. Inspect backyards or property for potential breeding sites. Any container that can hold water for more than three days should be removed. If the container cannot be removed, such as bird baths or decorative pots, drain them of water at least weekly. This will cut off the development cycle. Level up or fill redundant ditches or holes. Keep ponds and fountains clear of weeds or vegetation, and allow frequent water flow or mixing to prevent egg laying and development. Maintain well-trimmed and managed vegetation to eliminate resting sites for the adults. On large scales, local communities may ditch, dike, and manipulate water management as well as retrofit storm drains and catch basins. When being outdoors, the use of personal protection, such as insect repellants and wearing long sleeves and light-color clothes, will help to reduce biting. In case of a large and widespread infestation, consult a licensed Hpest control professional.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.mosquitoesData, function (mosquitoeData, mosquitoeIndex) {
        if (mosquitoeIndex != index) {
          mosquitoeData.showContent = false;
        } else if (mosquitoeIndex == index)
          mosquitoeData.showContent = !mosquitoeData.showContent;
      });
    }
  })

  .controller('termitesCtrl', function ($scope) {
    $scope.termitesData = [{
      header: 'General Facts',
      showContent: false,
      content: 'Aptly named after the Latin term for woodworm, termites have existed for over 120 million years. Despite their pest status, termites play an important role in the ecosystem by recycling wood, facilitating the decomposition of organic matter, replenishing essential nutrients in the soil, and assisting in the growth of plants by way of soil aeration. However, they can cause significant structural damage to homes and other manmade structures.'
    }, {
      header: 'Appearance / Identification',
      showContent: false,
      content: 'Termite colonies contain three main social castes: workers, soldiers, and reproductives. Each caste and type of termite differs slightly in appearance. In general, subterranean termites produce smaller workers of approximately 6 mm, while dampwood termite workers measure about 20 mm in size. Termite soldiers have enlarged mandibles, and reproductives feature two pairs of nearly identical wings. Members of every caste have three body parts: a head with a pair of segmented antennae, thorax, and abdomen. The insects appear whitish-brown to nearly black in colour.'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Termite colonies are prone to drying out, and termites must live in warm and humid environments. They are most active in temperatures from 24° to 35° Celsius and thrive in tropical and sub-tropical regions. In the cooler regions termites nest below the frost line where they find their way into heated structures, such as homes and businesses.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'Termites derive nutrients primarily from cellulose. Therefore, the pests consume live or dead wood, twigs, roots, grass, plant litter, paper, cardboard, fibreboard, cotton, and other plant materials.'
    }, {
      header: 'Life Cycle / Reproduction',
      showContent: false,
      content: 'Depending on the needs of the colony, recently hatched larvae moult into one of the three termite castes. While every termite starts out as a worker initially, the developing larvae can either develop into the worker caste or into a soldier, or develop wings and become a primary or secondary reproductive.<br><br>Primary reproductives swarm once the weather permits and leave the original colony to establish new ones, while secondary reproductives remain at the old colony to take over the responsibilities of procreation from the king or queen, if necessary. At the new locations, the primary reproductives assume the roles of queens and kings and start producing young to build up the colony. The formation of a new, thriving colony can take as long as 10 years.'
    }, {
      header: 'Problems Caused by Termites',
      showContent: false,
      content: 'As termite activity primarily takes place below the surface of wood, the pests are capable of completely excavating through wooden floors, furniture, window frames, doors, panelling, and other important structural components of buildings. The resulting damage weakens the wood and makes the structure prone to further deterioration. Several billion dollars are spent on termite damage each year.'
    }, {
      header: 'Detection / Signs of Infestation',
      showContent: false,
      content: 'Despite their covert lifestyle, termites consistently leave behind certain indicators of their presence. To avoid drying out, subterranean termites make mud tubes along walls, fences, and steps to help them travel between the colony and food sources. Homeowners should remain on the lookout for the dry and moist lines of mud, particularly in basements and garages. Spotted, striped, discoloured, or warped wood may also indicate the existence of termites below the surface. Furthermore, knocking on wood and hearing a hollow sound typically indicates termite damage.'
    }, {
      header: 'Prevention Tips',
      showContent: false,
      content: 'In general, altering the surrounding area of a home or building to make it less favourable for termites will prevent infestations from occurring. Reduce moisture levels by fixing leaky plumbing and ensuring all drainage flows well and away from the building. Keep shrubbery and trees maintained so that the vegetation does not come in contact with the structure, and store lumber and firewood away from the building in a dry place.'
    }, {
      header: 'Control / Removal',
      showContent: false,
      content: 'Suspected termite infestations usually demand the attention of a Hpests control professional. Most instances of infestation require the application of termiticides on or in the soil, and industry professionals possess the proper certifications and experience to apply termiticides safely and correctly.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.termitesData, function (termiteData, termiteIndex) {
        if (termiteIndex != index) {
          termiteData.showContent = false;
        } else if (termiteIndex == index)
          termiteData.showContent = !termiteData.showContent;
      });
    }
  })

  .controller('earwingCtrl', function ($scope) {
    $scope.earwingData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'There are several species of earwigs. As the name suggest, it was first introduced from Europe. It is dark-red in colour with prominent pincer-like appendage (cerci) at the tip of its abdomen. It measures about 16 mm long, with pale yellow wings and legs. The antennae are long with 12 segments. In preparation for flying, earwigs have been observed to climb as high as possible before taking flight. However, they do not typically fly and prefer to run from one place to another.'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Earwigs tend to prefer dark places rich in moisture and prefer to forage at night. The insects therefore rest in narrow cracks in foundations, under floorboards, and in other tight spaces around the home. In nature, they may appear under tree bark or beneath stones. The insects also release a pheromone in their feces that attracts other earwigs to the spot.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'Earwigs are omnivorous; they feed on dead or decaying vegetable matter, dead insects, and other small invertebrates. They use their cerci to grab and hold prey, including spiders, aphids, and even caterpillar pupae, before bending back in order to move the food to their mouthparts. Earwigs also feed on plants and, consequently, can cause injury to plants.'
    }, {
      header: 'Life Cycle / Reproduction',
      showContent: false,
      content: 'Earwigs undergo an incomplete metamorphosis made up of three stages: egg, nymph, and adult. Females initiate the cycle by laying between 20 and 60 eggs in burrows in a suitable environment. After about seven days, the young emerge from the eggs as nymphs. Generally resembling adult earwigs, nymphs pass through four stages, called instars, before fully maturing. Earwig nymphs live in the nest during the first two instars, begin to forage freely during the third one, and leave the nest completely upon reaching adulthood. Nymphs typically develop into adults in late summer or early fall. Adult earwigs can survive cold weather.'
    }, {
      header: 'Problems Caused by Earwigs',
      showContent: false,
      content: 'Even though they feed on refuse and certain harmful insects, earwigs may still pose multiple problems for home and business owners. The pests present various issues by feeding on flowers, vegetables, ornamental trees, and shrubs. In large enough numbers, earwigs can eventually kill healthy plants. Additionally, humans and pets are sometimes recipients of defensive pinches from earwigs when the insects feel threatened. Earwigs also possess a gland that discharges a foul-smelling yellow to brown liquid as another defence mechanism.'
    }, {
      header: 'Detection / Signs of Infestation',
      showContent: false,
      content: 'Although earwigs are not typically encountered in large numbers, the easiest way to identify an earwig infestation is seeing the insect firsthand. Damp and dark basement areas with multiple cracks in the foundation provide perfect hiding places for the pests. Garbage and refuse may also attract earwigs, as will piles of leaves, vegetation, and mulched areas. The insects release pheromones which may lead other earwigs to assemble in the area. Populations may increase during nesting, as well.'
    }, {
      header: 'Prevention Tips',
      showContent: false,
      content: 'The easiest and most complete way of preventing earwigs from entering a structure is to modify the surrounding area. Get rid of all decaying vegetation, such as leaf piles, grass clippings, and compost heaps, to get rid of potential nesting sites. Fix leaky downspouts, reroute drains when necessary, and repair broken irrigation systems to eliminate the moist, dark areas where earwigs flourish. While pesticides and traps may work, these methods cannot guarantee total removal and may present dangers to people and pets if used improperly. To fully remove an earwig infestation and reduce the chances of future problems, call a H pest control professional.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.earwingData, function (data, earwingindex) {
        if (earwingindex != index) {
          data.showContent = false;
        } else if (earwingindex == index)
          data.showContent = !data.showContent;
      });
    }
  })

  .controller('gnatsCtrl', function ($scope) {
    $scope.gnatsData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'Most gnats are smaller, with less robust bodies, than other species of flies. Ranging in length from 1 to 13 mm, gnats are delicate-looking insects with long wings and spindly legs. Like all insects, the body is divided into three distinct parts: head, thorax and abdomen. The head has a pair of antennae that exceed the length of the head. The pests generally appear black, grey, brown, or even yellow in colour. Fungus gnats have distinct elongated coxae, structures that connect the legs to the thorax.'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Gnats live throughout India and the rest of the world. Found in greenhouses, nurseries, and sod farms, certain species of gnats stay close to overwatered and fungi-ridden plants to mate and feed. Other species are found almost exclusively near running water, especially fast-moving rivers and streams.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'The dietary habits of gnats vary by species and even by gender. Female black flies, for example, are blood feeders that take blood meals from humans, domesticated pets, and livestock, while males primarily feed on nectar. Fungus gnats, on the other hand, feed on a variety of plants, but the larvae feed mainly on the fungi that grow among overwatered vegetation or in decaying organic matter.'
    }, {
      header: 'Life Cycle / Reproduction',
      showContent: false,
      content: 'Like many insects, gnats hatch from eggs as larvae and develop into pupae before emerging as mature adults. Female gnats can lay up to 500 eggs in a lifetime and depend on the presence of moisture to help their offspring mature. Black flies, for example, lay their eggs in running rivers and streams by attaching them in clusters to vegetation and rocks. The emerging larvae likewise attach themselves to plants and rocks by using tiny hooks on their abdomen and pass through six instars while filter-feeding on vegetation in the water. Pupation occurs in silk cocoons underwater, with adults emerging in air bubbles as fully mature gnats.<br><br>In contrast, fungus gnat eggs and larvae mature in moist soil, where most of the damage to host plants occurs as the developing larvae feed on organic mulch, leaf mould, grass clippings, compost, root hairs, and fungi. Many types of gnats can produce multiple generations in a single year.'
    }, {
      header: 'Problems Caused by Gnats',
      showContent: false,
      content: 'Generally a nuisance pest, adult gnats become active and swarm during the warmer months. Certain species can directly affect the growth of potted, ornamental, and greenhouse plants. When plants become overwatered and the soil is not allowed to dry properly, larvae may attack the fungus that ends up growing, resulting in damage and stunting the growth of the plant.<br><br>Other species, such as the buffalo gnat, may actively attack humans, pets, and livestock to feed on their blood. Though most species of gnats are not known carriers of diseases, some tropical species of black flies transmit parasitic nematodes, which cause onchocerciasis, or river blindness, in humans. Additionally, large numbers of black flies attacking an animal all at once can result in death by blood loss or anaphylactic shock.'
    }, {
      header: 'Detection / Signs of Infestation',
      showContent: false,
      content: 'The surest sign of infestation is the sight of adult gnats flying around. In particular, the presence of large populations of swarming gnats usually indicates an incursion problem. Noticing damaged plants near ground level and seeing larvae in the soil also clearly signifies a gnat infestation.'
    }, {
      header: 'Prevention Tips',
      showContent: false,
      content: 'Exclusion represents the most effective form of prevention. Avoid overwatering plants to reduce fungus gnat populations and breeding grounds, and get rid of currently infested soil and vegetation. Application of appropriately labelled insecticides in affected areas may help prevent infestations of black flies or other gnat species that commonly travel great distances to locate food sources.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.gnatsData, function (data, gnatsindex) {
        if (gnatsindex != index) {
          data.showContent = false;
        } else if (gnatsindex == index)
          data.showContent = !data.showContent;
      });
    }
  })

  .controller('ratsCtrl', function ($scope) {
    $scope.ratsData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'The two rat species have different and distinct features. The roof rat is most recognizable because of its long tail which drags behind it as it moves. The tail is often longer than the rest of the body. The body measures about 41 cm in length, is slick and lean with brown to black fur, and weighs between 150 and 250 g. The ears and eyes are large with pointed snout. The Norway rat on the other hand is stocky, heavy body, short tail with the body measuring about 30 to 50 cm. Its eyes and ears are small with blunt snout. The body has brown or black colouring, though some species may appear gray or white, as well.'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Rats are present in Europe, Asia, Africa, Australia, and the Americas. The widespread population shows no signs of decreasing. In fact, brown and black rats are both considered abundant and of least concern of endangerment or extinction. The highly adaptable animals thrive in areas where humans live and feed on any obtainable food sources, which greatly diversifies the available habitats for rats.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'While specific eating habits may differ slightly between particular rat species, the rodents generally eat anything. As omnivores, rats adhere to a mixed diet consisting of grains, fruits, nuts, vegetables, and meat. However, the Norway rat has been shown to prefer foods high in fat content such as grease and meat. Meanwhile, roof rats prefer grains, nuts, seeds, and plant-based foods.'
    }, {
      header: 'Life Cycle / Reproduction',
      showContent: false,
      content: 'Rats usually only live to about six months of age in the wild. They reach sexual maturity at around two to three months old. Pregnancies last between 20 and 30 days and typically result in 6 to 12 offspring. Though the rodents possess short lifespans, the rapid rate at which they reproduce, coupled with short gestation periods and large litter sizes, allows rats to continue as formidable pests.'
    }, {
      header: 'Problems Caused by Rats',
      showContent: false,
      content: 'The gnawing and foraging behaviours of rats often lead to food and structural damages in homes. During the pursuit of nourishment and nesting areas, the rodents may leave smudge marks and droppings behind, as well. Many people find rats disgusting and/or frightening and react with horror upon seeing the pests. Rats very rarely bite but will do so if provoked or trapped. In addition, rats can transmit pathogens directly on their bodies, saliva, urine, droppings, or thorough vectors such as fleas and mites. The rodents infamously proliferated the Black Death, which led to the deaths of millions of people in the 14th century. Though the pests do not carry the plague today, the spread of disease by rats is still a serious cause for concern.'
    }, {
      header: 'Detection / Signs of Infestation',
      showContent: false,
      content: 'Rats are often heard rustling, squeaking, or gnawing while in hiding. The constant gnawing of rats also leaves telltale damage, like teeth marks, on hard surfaces. Other signs of a rat infestation include droppings, footprints, nests, and the visible trails formed when the rodents travel the same path repeatedly while foraging for food.'
    }, {
      header: 'Prevention Tips',
      showContent: false,
      content: 'While even the most thorough homeowners may still end up with rat infestations, implementing certain preventative measures greatly reduces the possibility of rodent problems. Keeping the home properly insulated is a crucial step to reduce points of entry for rats, while storing garbage in sealed containers makes the contents less attractive to the rodents. Homeowners should screen off windows and keep the protective coverings in good repair, as well. While a proactive approach can significantly reduce the risk of rat problems, infestations may sometimes occur regardless. Rat infestations should not be taken lightly and normally require the assistance of a pest control professional to properly resolve. Contact Hpests Control Services professional. '
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.ratsData, function (data, ratsindex) {
        if (ratsindex != index) {
          data.showContent = false;
        } else if (ratsindex == index)
          data.showContent = !data.showContent;
      });
    }
  })

  .controller('weevilsCtrl', function ($scope) {
    $scope.weevilsData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'Weevil colouration ranges from vivid green or red to dull brown, black, or beige depending on the species. Adult weevils have rounded bodies, six legs, a pair of short antennae, and elongated mouthpieces. Larvae are generally lighter in colour and appear as small, fleshy, maggot-like creatures. While the average weevil measures less than 6 mm in length, some species can grow quite large.'
    }, {
      header: 'Habitat',
      showContent: false,
      content: 'Since weevils prefer warm, moist environments, they are mostly found throughout the southern parts of the country. Some species live among plants and lay their eggs in rolled-up leaves. Others feed and breed within stored food products like cereal grains. The main reason weevils invade homes is to escape unfavourable weather conditions.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'As herbivorous creatures, weevils feed on various parts of plants, from leaves and stems to roots and fruits. Stored grains and flour can also be significant food sources for certain species.'
    }, {
      header: 'Life Cycle',
      showContent: false,
      content: 'Female weevils can lay over 150 eggs in their lifetimes. Once the eggs hatch, weevil larvae feed voraciously on whatever plant-based food source is nearby. After some time, weevils morph into sexually mature adults with hard outer shells.'
    }, {
      header: 'Problems Caused by Weevils',
      showContent: false,
      content: 'The tiny insects have a huge impact on agriculture, stored foods, and ornamental plants. In fact, large populations of weevils are capable of defoliating or severely damaging entire crop yields. In addition to eating plants, weevils bore into grains and other stored foods to lay eggs. This process increases the heat and humidity inside the packages they infest, which facilitates the growth of mold and fungus.'
    }, {
      header: 'Infestation of Weevils in the Home',
      showContent: false,
      content: 'As infestations take place almost entirely inside packages of stored foods, weevils can be hard to detect. Homeowners should check for the presence of small, lightly coloured grubs in containers of cereal, flour, and similar food products. Additionally, if packages of grains contain mold or appear slightly wet, this can indicate the presence of weevils.'
    }, {
      header: 'Prevention',
      showContent: false,
      content: 'Preventing weevil infestations is a difficult task since the pests are very small and persistent. Homeowners can avoid weevil damage in lawns by planting ornamental foliage, shrubs, and trees that are resistant to insect damage. In the home, individuals should store food products in tightly sealed containers.'
    }, {
      header: 'Control / Removal',
      showContent: false,
      content: 'Professional pest control is the best solution to weevil problems. Neglecting weevil infestations or utilizing ineffective treatments may exacerbate issues instead of helping. The highly trained experts at HPests Control Services can combat the presence of weevils and protect homes and property from damage.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.weevilsData, function (data, weevilsindex) {
        if (weevilsindex != index) {
          data.showContent = false;
        } else if (weevilsindex == index)
          data.showContent = !data.showContent;
      });
    }
  })

  .controller('bookNowCtrl', function ($scope, $http, $ionicModal, $ionicLoading) {
    $scope.area = [{
      id: 2,
      text: 'Commercial Pest Control'
    }, {
      id: 1,
      text: 'Residential Pest Control'
    }];

    $scope.service = [{
      id: 1,
      text: 'Cockroach Control Service'
    }, {
      id: 2,
      text: 'Termite Control Service'
    }, {
      id: 3,
      text: 'Bed Bugs Control Service'
    }, {
      id: 4,
      text: 'Lizard Control Service'
    }, {
      id: 5,
      text: 'Mosquito Control Service'
    }, {
      id: 6,
      text: 'Rodents Control Service'
    }, {
      id: 8,
      text: 'General Pest Management(Except Termite)'
    }];

    $scope.serviceType = [{
      id: 1,
      text: 'Single Service'
    }, {
      id: 2,
      text: '6 Months 2 Services'
    }, {
      id: 3,
      text: '1 Year 3 Services '
    }, {
      id: 4,
      text: '2 Years 6 Services'
    }, {
      id: 5,
      text: '3 Years 9 Services'
    }];

    $scope.squareFeet = [{
      id: 1,
      text: '500 SFT'
    }, {
      id: 2,
      text: '800 SFT'
    }, {
      id: 3,
      text: '950 SFT'
    }, {
      id: 4,
      text: '1100 SFT'
    }, {
      id: 5,
      text: '1200 SFT'
    }, {
      id: 6,
      text: '1350 SFT'
    }, {
      id: 11,
      text: '1500 SFT'
    }, {
      id: 12,
      text: '1600 SFT'
    }, {
      id: 13,
      text: '1800 SFT'
    }, {
      id: 14,
      text: '1950 SFT'
    }, {
      id: 15,
      text: '2100 SFT'
    }, {
      id: 16,
      text: '2300 SFT'
    }, {
      id: 17,
      text: '2500 SFT'
    }, {
      id: 18,
      text: '3000 SFT'
    }];
    $scope.noSelection = true;
    $scope.processObject = 'MRP  :  ₹ /-';
    $scope.data = {};
    $scope.getValue = function () {
      if ($scope.data.ar && $scope.data.serv && $scope.data.st && $scope.data.sqft) {
        $scope.noSelection = false;
        var url = "http://www.hpests.com/hapdests/get_mrp.php"
        var formData = new FormData();
        formData.append("area_id", $scope.data.ar.id);
        formData.append("service_id", $scope.data.serv.id);
        formData.append("service_type_id", $scope.data.st.id);
        formData.append("house_type_id", $scope.data.sqft.id);
        $http.post(url, formData, {
          headers: {
            'Content-Type': undefined
          }
        }, ).success(function (response) {
          $scope.processObject = response;
        });
      } else {
        $scope.processObject = 'MRP  :  ₹ /-';
        $scope.noSelection = true;
      }
    }

    $scope.bookNow = function () {
      $ionicLoading.show({
        noBackdrop: false,
        template: ' <ion-spinner icon="lines"></ion-spinner>'
      });
      var url = "http://www.hpests.com/index.php"
      var formData = new FormData();
      if ($scope.data.ar)
        formData.append("service", $scope.data.ar.id);
      if ($scope.data.serv)
        formData.append("services", $scope.data.serv.id);
      if ($scope.data.st)
        formData.append("service_type", $scope.data.st.id);
      if ($scope.data.sqft)
        formData.append("house_type", $scope.data.sqft.id);
      formData.append("txtName", $scope.data.name);
      formData.append("txtEmail", $scope.data.email);
      formData.append("txtPhone", $scope.data.phone);
      formData.append("txtComments", $scope.comment);
      formData.append("submitQuote", "ASK A QUOTE");
      $http.post(url, formData, {
        headers: {
          'Content-Type': undefined
        }
      }, ).success(function (response) {
        $scope.data = {};
        $ionicLoading.hide();
        $scope.noSelection = true;
        $scope.processObject = 'MRP  :  ₹ /-';
        $scope.sucessModal.show()
      }).error(function (error) {
        $ionicLoading.hide();
        $scope.warning.show();
      });
    }

    $scope.sucessModal = $ionicModal.fromTemplateUrl('templates/successModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (sucessModal) {
      $scope.sucessModal = sucessModal;
    });

    $scope.warning = $ionicModal.fromTemplateUrl('templates/warningModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (warning) {
      $scope.warning = warning;
    });
  })

  .controller('freeInspectionCtrl', function ($scope, $http, $ionicModal, $ionicLoading) {
    $scope.area = [{
      id: 2,
      text: 'Commercial Pest Control'
    }, {
      id: 1,
      text: 'Residential Pest Control'
    }];

    $scope.service = [{
      id: 1,
      text: 'Cockroach Control Service'
    }, {
      id: 2,
      text: 'Termite Control Service'
    }, {
      id: 3,
      text: 'Bed Bugs Control Service'
    }, {
      id: 4,
      text: 'Lizard Control Service'
    }, {
      id: 5,
      text: 'Mosquito Control Service'
    }, {
      id: 6,
      text: 'Rodents Control Service'
    }, {
      id: 8,
      text: 'General Pest Management(Except Termite)'
    }];

    $scope.serviceType = [{
      id: 1,
      text: 'Single Service'
    }, {
      id: 2,
      text: '6 Months 2 Services'
    }, {
      id: 3,
      text: '1 Year 3 Services '
    }, {
      id: 4,
      text: '2 Years 6 Services'
    }, {
      id: 5,
      text: '3 Years 9 Services'
    }];

    $scope.squareFeet = [{
      id: 1,
      text: '500 SFT'
    }, {
      id: 2,
      text: '800 SFT'
    }, {
      id: 3,
      text: '950 SFT'
    }, {
      id: 4,
      text: '1100 SFT'
    }, {
      id: 5,
      text: '1200 SFT'
    }, {
      id: 6,
      text: '1350 SFT'
    }, {
      id: 11,
      text: '1500 SFT'
    }, {
      id: 12,
      text: '1600 SFT'
    }, {
      id: 13,
      text: '1800 SFT'
    }, {
      id: 14,
      text: '1950 SFT'
    }, {
      id: 15,
      text: '2100 SFT'
    }, {
      id: 16,
      text: '2300 SFT'
    }, {
      id: 17,
      text: '2500 SFT'
    }, {
      id: 18,
      text: '3000 SFT'
    }];
    $scope.noSelection = true;
    $scope.processObject = 'MRP  :  ₹ /-';
    $scope.data = {};
    $scope.getValue = function () {
      if ($scope.data.ar && $scope.data.serv && $scope.data.st && $scope.data.sqft) {
        $scope.noSelection = false;
        var url = "http://www.hpests.com/hapdests/get_mrp.php"
        var formData = new FormData();
        formData.append("area_id", $scope.data.ar.id);
        formData.append("service_id", $scope.data.serv.id);
        formData.append("service_type_id", $scope.data.st.id);
        formData.append("house_type_id", $scope.data.sqft.id);
        $http.post(url, formData, {
          headers: {
            'Content-Type': undefined
          }
        }, ).success(function (response) {
          $scope.processObject = response;
        });
      } else {
        $scope.processObject = 'MRP  :  ₹ /-';
        $scope.noSelection = true;
      }
    }

    $scope.askqoute = function () {
      $ionicLoading.show({
        noBackdrop: false,
        template: ' <ion-spinner icon="lines"></ion-spinner>'
      });
      var url = "http://www.hpests.com/index.php"
      var formData = new FormData();
      if ($scope.data.ar)
        formData.append("service", $scope.data.ar.id);
      if ($scope.data.serv)
        formData.append("services", $scope.data.serv.id);
      if ($scope.data.st)
        formData.append("service_type", $scope.data.st.id);
      if ($scope.data.sqft)
        formData.append("house_type", $scope.data.sqft.id);
      formData.append("txtName", $scope.data.name);
      formData.append("txtEmail", $scope.data.email);
      formData.append("txtPhone", $scope.data.phone);
      formData.append("txtComments", $scope.comment);
      formData.append("submitQuote", "ASK A QUOTE");
      $http.post(url, formData, {
        headers: {
          'Content-Type': undefined
        }
      }, ).success(function (response) {
        $scope.data = {};
        $scope.noSelection = true;
        $scope.processObject = 'MRP  :  ₹ /-';
        $ionicLoading.hide();
        $scope.sucessModal.show()
      }).error(function (err) {
        $ionicLoading.hide();
        $scope.warning.show();
      });
    }
    $scope.sucessModal = $ionicModal.fromTemplateUrl('templates/successModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (sucessModal) {
      $scope.sucessModal = sucessModal;
    });
    $scope.warning = $ionicModal.fromTemplateUrl('templates/warningModal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (warning) {
      $scope.warning = warning;
    });

  })

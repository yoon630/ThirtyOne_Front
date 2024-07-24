import { useEffect, useRef, useState } from 'react';

function Map() {
  const mapRef = useRef(null);
  const [center, setCenter] = useState({ lat: 37.5666103, lng: 126.9783882 }); // 기본 좌표: 서울 시청
  const markersData = [
    { lat: 37.4514544, lng: 126.656194, name: '파리바게트 인하점' },
    // 추가 마커 데이터를 여기에 입력
  ];

  useEffect(() => {
    // Geolocation API로 현재 위치 가져오기
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setCenter({ lat: latitude, lng: longitude });
          },
          error => {
            console.error("Geolocation 오류:", error);
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      } else {
        console.error("이 브라우저에서는 Geolocation을 지원하지 않습니다.");
      }
    };

    getCurrentLocation();
  }, []);

  useEffect(() => {
    const { naver } = window;
    if (!naver) return;

    if (!mapRef.current) {
      const mapOptions = {
        center: new naver.maps.LatLng(center.lat, center.lng),
        logoControl: false,
        mapDataControl: false,
        scaleControl: true,
        tileDuration: 200,
        zoom: 18,
        zoomControl: false,
        zoomControlOptions: { position: naver.maps.Position.BOTTOM_RIGHT },
      };

      mapRef.current = new naver.maps.Map('map', mapOptions);
    } else {
      mapRef.current.setCenter(new naver.maps.LatLng(center.lat, center.lng));
    }

    // 현재 위치에 마커 추가
    new naver.maps.Marker({
      position: new naver.maps.LatLng(center.lat, center.lng),
      map: mapRef.current,
    });

    // 여러 마커 추가 및 클릭 이벤트 처리
    markersData.forEach(markerData => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(markerData.lat, markerData.lng),
        map: mapRef.current,
      });

      naver.maps.Event.addListener(marker, 'click', () => {
        console.log(`Marker clicked: ${markerData.name}`);
      });
    });
  }, [center]);

  return (
    <div id="map" style={{ width: '100%', height: '100vh' }} />
  );
}

export default Map;
